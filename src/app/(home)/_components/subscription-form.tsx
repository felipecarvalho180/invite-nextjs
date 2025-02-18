"use client";

import { Button } from "@/components/button";
import { InputField, InputIcon, InputRoot } from "@/components/input";
import { ArrowRight, Mail, User } from "lucide-react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(2, "Nome completo é obrigatório"),
  email: z.string().email("E-mail inválido"),
});

type FormSchema = z.infer<typeof formSchema>;

export function SubscriptionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubscribe = async (data: FormSchema) => {
    const name = data.name;
    const email = data.email;

    console.log(name, email);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubscribe)}
      className="w-full bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 md:max-w-[440px]"
    >
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Inscrição
      </h2>

      <div className="space-y-3">
        <div className="space-y-2">
          <InputRoot error={!!errors?.name}>
            <InputIcon>
              <User className="size-6" />
            </InputIcon>
            <InputField
              type="text"
              placeholder="Nome completo"
              {...register("name")}
            />
          </InputRoot>

          {errors?.name && (
            <p className="text-danger font-semibold text-xs">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <InputRoot error={!!errors?.email}>
            <InputIcon>
              <Mail className="size-6" />
            </InputIcon>
            <InputField
              type="text"
              placeholder="E-mail"
              {...register("email")}
            />
          </InputRoot>

          {errors?.email && (
            <p className="text-danger font-semibold text-xs">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <Button type="submit">
        Confirmar
        <ArrowRight className="size-6" />
      </Button>
    </form>
  );
}
