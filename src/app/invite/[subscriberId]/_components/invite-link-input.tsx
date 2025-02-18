"use client";

import { IconButton } from "@/components/icon-button";
import { InputField } from "@/components/input";
import { InputIcon } from "@/components/input";
import { InputRoot } from "@/components/input";
import { Copy, Link } from "lucide-react";
import toast from "react-hot-toast";

interface InviteLinkInputProps {
  inviteLink: string;
}

export function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
  function copyInviteLink() {
    navigator.clipboard.writeText(inviteLink);
    toast.success("Link copiado com sucesso!");
  }

  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>

      <InputField readOnly defaultValue={inviteLink} />

      <IconButton className="-mr-2" onClick={copyInviteLink}>
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  );
}
