📑 Agenda for Day 07: TypeScript: Key Features

📌 Type Aliases
📌 Object Literals
📌 Type Assertion 
📌 Enums
📌 Optional & Default Parameters
📌 Dropdown

## Type Aliases

Type aliases allow you to create a new name for a type. Type aliases are sometimes equivalent to interfaces, but can name primitives and unions.
```typescript
type UserID = string | number;
let userIdentifier: UserID = "abc123";
```

## Type Assertion

Type assertion is similar to type casting in other languages. It is a way to tell the TypeScript compiler about the type of a variable so you can access the specific properties of that type.

```typescript
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```

## Enum and Types

Enums allow you to define a set of named constants, either numeric or string-based. They can help in managing sets of related constants and improve the readability of your code.

```typescript
enum TestStatus {
    Pass = 1,
    Fail,
    Skip,
}
```

## Optional & Default Parameters

Functions in TypeScript can define parameters that are optional or have default values, enhancing function flexibility and providing default functionality.

```typescript
function buildName(firstName: string, lastName?: string, middleName = "Smith") {
    if (lastName) return `${firstName} ${middleName} ${lastName}`;
    return `${firstName} ${middleName}`;
}
```

## Select Dropdowns

Playwright provides methods to interact with `<select>` dropdowns by value, label, or index:

```javascript
// Select by value
await page.selectOption('select#yourSelectId', { value: 'optionValue' });

// Select by label
await page.selectOption('select#yourSelectId', { label: 'Option Label' });

// Select by index
await page.selectOption('select#yourSelectId', { index: 0 });