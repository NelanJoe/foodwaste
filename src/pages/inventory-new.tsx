import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Icon } from "@iconify/react";
import { useMoveBack } from "@/hooks/use-move-back";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCreateInventory } from "@/api/inventory/create-inventory";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  store_at: z.string(),
  weight: z.string(),
  unit: z.string(),
  expired_at: z.string(),
  photo: z.string(),
});

export default function InventoryNew() {
  const moveBack = useMoveBack();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      store_at: "chiller",
      weight: "0",
      unit: "",
      expired_at: "",
      photo: "https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg",
    },
  });

  const { createInventory, isPending } = useCreateInventory();

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    createInventory(values);
  };

  return (
    <section className="space-y-5 pb-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="icon" onClick={moveBack}>
            <Icon icon="mynaui:arrow-left" />
          </Button>
          <p>Tambah Belanjaan</p>
        </div>
      </div>
      <div className="mt-12 ">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="photo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Photo Url</FormLabel>
                  <FormControl>
                    <Input id="photo" {...field} disabled />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Barang</FormLabel>
                  <FormControl>
                    <Input id="name" placeholder="Nama Barang" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="store_at"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Penyimpanan</FormLabel>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Pilih penyimpanan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Penyimpanan</SelectLabel>
                          <SelectItem value="chiller">Chiller</SelectItem>
                          <SelectItem value="freezer">Freezer</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bobot</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="unit"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Satuan</FormLabel>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Pilih satuan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Satuan</SelectLabel>
                          <SelectItem value="gram">Gram</SelectItem>
                          <SelectItem value="kilogram">Kilogram</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="expired_at"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Expired At</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? "Loading..." : "Tambah Belanjaan"}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
