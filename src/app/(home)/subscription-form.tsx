"use client";

import { Button } from "@/components/button";
import { InputField, InputIcon, InputRoot } from "@/components/input";
import { ArrowRight, Mail, User } from "lucide-react";

export function SubscriptionForm() {
  return (
    <form className="w-full bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 md:max-w-[440px]">
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Inscrição
      </h2>

      <div className="space-y-3">
        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <User className="size-6" />
            </InputIcon>
            <InputField type="text" placeholder="Nome completo" />
          </InputRoot>
        </div>

        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <Mail className="size-6" />
            </InputIcon>
            <InputField type="text" placeholder="E-mail" />
          </InputRoot>
        </div>
      </div>

      <Button type="submit">
        Confirmar
        <ArrowRight className="size-6" />
      </Button>
    </form>
  );
}
