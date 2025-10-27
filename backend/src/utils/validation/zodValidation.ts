import { z } from 'zod';

export const zString = z.string().min(1);

export const zNullableString = (maxLength?: number) => {
  let schema = z.string();
  if (maxLength) {
    schema = schema.max(maxLength);
  }
  return schema.nullable();
};

export const zName = z.string().min(1).max(200);

export const zNullableDescription = z.string().max(500).nullable();

export const zNumber = z.number();

export const zPositiveNumber = z.number().positive();

export const zNonNegativeNumber = z.number().nonnegative();

export const zInteger = z.number().int();

export const zPositiveInteger = z.number().int().positive();

export const zBoolean = z.boolean();

export const zBit = z.union([z.literal(0), z.literal(1)]);

export const zEmail = z.string().email();

export const zUrl = z.string().url();

export const zDate = z.date();

export const zDateString = z.string().datetime();

export const zUUID = z.string().uuid();

export const zArray = <T extends z.ZodTypeAny>(schema: T) => z.array(schema);

export const zOptional = <T extends z.ZodTypeAny>(schema: T) => schema.optional();

export const zNullable = <T extends z.ZodTypeAny>(schema: T) => schema.nullable();
