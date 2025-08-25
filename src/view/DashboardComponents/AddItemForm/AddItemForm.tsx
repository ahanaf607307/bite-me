"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import FoodServices from "@/modules/allItem/food.service";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface FoodItem {
  foodName: string;
  foodTitle: string;
  foodBrand: string;
  foodCategory: string;
  foodDesc: string;
  foodImage: string;
  foodPrice: number;
  discountPrice: number;
  foodStatus: string;
  foodRating: string;
}

const foodCategories = [
  "Appetizers",
  "Main Course",
  "Desserts",
  "Beverages",
  "Salads",
  "Soups",
  "Pizza",
  "Burgers",
  "Pasta",
  "Seafood",
  "Vegetarian",
  "Meat",
  "Other",
];

const ratings = ["1", "2", "3", "4", "5"];

export function AddItemForm() {
  const { register, handleSubmit, control } = useForm<FoodItem>();
  const onSubmit = async (data: FoodItem) => {
    try {
      const res = await FoodServices.create(data);
      if (res.success === true) {
        toast.success("Item Added Successfully");
      }
      console.log(res);
    } catch (error) {
      console.log("Error from add item dashboard");
    }
  };
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-3xl">Add Food Item Details</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Food Name */}
          <div className="space-y-2">
            <Label htmlFor="foodName">Food Name *</Label>
            <Input
              {...register("foodName", { required: true })}
              type="text"
              placeholder="Enter food name"
              required
            />
          </div>
          {/* Food Title */}
          <div className="space-y-2">
            <Label htmlFor="foodTitle">Food Title *</Label>
            <Input
              {...register("foodTitle", { required: true })}
              type="text"
              placeholder="Enter food Title"
              required
            />
          </div>

          {/* Food Brand */}
          <div className="space-y-2">
            <Label htmlFor="foodBrand">Food Brand *</Label>
            <Input
              {...register("foodBrand", { required: true })}
              type="text"
              placeholder="Enter brand name"
              required
            />
          </div>

          {/* Food Category */}
          <div className="space-y-2">
            <Label htmlFor="foodCategory">Food Category *</Label>
            <Controller
              control={control}
              name="foodCategory"
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger
                    className="w-full
                  "
                  >
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {foodCategories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          {/* Food Staus */}
          <div className="space-y-2">
            <Label htmlFor="foodStatus">Food Status *</Label>
            <Controller
              control={control}
              name="foodStatus"
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger
                    className="w-full
                  "
                  >
                    <SelectValue placeholder="Select a Status" />
                  </SelectTrigger>
                  <SelectContent>
                    {/* <SelectLabel>Select Status</SelectLabel> */}
                    <SelectItem value="popular">Popular</SelectItem>
                    <SelectItem value="dailySell">Daily Sell</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          {/* Food Description */}
          <div className="space-y-2">
            <Label htmlFor="foodDesc">Food Description *</Label>
            <Textarea
              {...register("foodDesc", { required: true })}
              placeholder="Enter food description"
              rows={3}
              required
            />
          </div>

          {/* Food Image URL */}
          <div className="space-y-2">
            <Label htmlFor="foodImage">Food Image URL</Label>
            <Input
              type="url"
              placeholder="Enter image URL"
              {...register("foodImage", { required: true })}
            />
          </div>

          {/* Price Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="foodPrice">Food Price ($) *</Label>
              <Input
                {...register("foodPrice", { required: true })}
                type="number"
                step="0.01"
                min="0"
                placeholder="0.00"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="discountPrice">Discount Price ($)</Label>
              <Input
                {...register("discountPrice", { required: true })}
                type="number"
                step="0.01"
                min="0"
                placeholder="0.00"
              />
            </div>
          </div>

          {/* Food Rating */}
          <div className="space-y-2">
            <Label htmlFor="foodRating">Food Rating</Label>
            <Controller
              name="foodRating"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select rating" />
                  </SelectTrigger>
                  <SelectContent>
                    {ratings.map((rating) => (
                      <SelectItem key={rating} value={rating}>
                        {rating} Star{rating !== "1" ? "s" : ""}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full cursor-pointer">
            Add Item
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
