"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "@/components/ui/use-toast";

const schema = z.object({
  email: z.string().email({ message: "Your email is invalid." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});

const SimpleForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  function onSubmit(data) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-primary-foreground">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="flex flex-col gap-2">
        <Label
          htmlFor="email"
          className={cn("", {
            "text-destructive": errors.email,
          })}
        >
          Email
        </Label>
        <Input
          type="email"
          {...register("email")}
          placeholder="Enter your email"
          className={cn("", {
            "border-destructive focus:border-destructive": errors.email,
          })}
        />
        {errors.email && (
          <p
            className={cn("text-xs", {
              "text-destructive": errors.email,
            })}
          >
            {errors.email.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <Label
          htmlFor="password"
          className={cn("", {
            "text-destructive": errors.password,
          })}
        >
          Password
        </Label>
        <Input
          type="password"
          {...register("password")}
          placeholder="Enter your password"
          className={cn("", {
            "border-destructive focus:border-destructive": errors.password,
          })}
        />
        {errors.password && (
          <p className="text-xs text-destructive">{errors.password.message}</p>
        )}
      </div>
      <div className="mt-2">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

export default SimpleForm;
