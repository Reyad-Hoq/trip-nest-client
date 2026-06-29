"use client";

import { signOut, useSession } from "@/lib/auth-client";
import { ChevronDownWide } from "@gravity-ui/icons";
import { Button, Dropdown, Label } from "@heroui/react";

export function ProfileDropdown() {
  const { data: session, isPending } = useSession()

  const user = session?.user;
  const handleSignOut = async () => {
    await signOut();
  }
  return (
    <Dropdown>
      <Button aria-label="Menu" className="bg-transparent text-blue-950">
        <div className="flex gap-2 text-sm">
          {user?.name}<ChevronDownWide />
        </div>
      </Button>
      <Dropdown.Popover>
        <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
          <Dropdown.Item id="new-file" textValue="New file">
            <Label className="text-blue-900 font-semibold">My Profile</Label>
          </Dropdown.Item>
          <Dropdown.Item onClick={handleSignOut} variant="danger">
            <Label>Sign Out</Label>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}