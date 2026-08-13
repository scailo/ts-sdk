[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest

# Class: SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest

Represents the request payload utilized to retrieve the cumulative quantity of a specific family
that has already been billed (invoiced) against a given source document.

**Note:** This query is a critical reconciliation tool used during the billing lifecycle to evaluate
historical fulfillment and prevent over-billing against the original constraints of a Sales Order.

**`Generated`**

from message Scailo.SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest

## Hierarchy

- `Message`\<[`SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest`](SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)\>

  ↳ **`SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest`**

## Table of contents

### Constructors

- [constructor](SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#constructor)

### Properties

- [familyId](SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#familyid)
- [refFrom](SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#reffrom)
- [refId](SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#refid)
- [fields](SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#fields)
- [runtime](SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#runtime)
- [typeName](SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#typename)

### Methods

- [clone](SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#clone)
- [equals](SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#equals)
- [fromBinary](SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#frombinary)
- [fromJson](SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#fromjson)
- [fromJsonString](SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#fromjsonstring)
- [getType](SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#gettype)
- [toBinary](SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#tobinary)
- [toJSON](SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#tojson)
- [toJson](SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#tojson-1)
- [toJsonString](SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#tojsonstring)
- [equals](SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#equals-1)
- [fromBinary](SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#frombinary-1)
- [fromJson](SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#fromjson-1)
- [fromJsonString](SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest**(`data?`): [`SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest`](SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest`](SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)\> |

#### Returns

[`SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest`](SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Overrides

Message\&lt;SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest\&gt;.constructor

#### Defined in

[src/sales_invoices.scailo_pb.ts:2537](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L2537)

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the family or catalog item being queried to determine its cumulative billed quantity.

**`Example`**

```ts
505
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 family_id = 3;

#### Defined in

[src/sales_invoices.scailo_pb.ts:2535](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L2535)

___

### refFrom

• **refFrom**: [`SALES_INVOICE_REF_FROM`](../enums/SALES_INVOICE_REF_FROM.md) = `SALES_INVOICE_REF_FROM.SALES_INVOICE_REF_FROM_ANY_UNSPECIFIED`

**`Mandatory`**

**`Description`**

The specific module or record type from which the invoice originates and against which the billed quantity is being checked (e.g., Sales Order).

**`Example`**

```ts
"SALES_INVOICE_REF_FROM_SALES_ORDER"
```

**`Regex`**

^[A-Z_]+$

**`Format`**

Valid SALES_INVOICE_REF_FROM enum value.

**`Generated`**

from field: Scailo.SALES_INVOICE_REF_FROM ref_from = 1;

#### Defined in

[src/sales_invoices.scailo_pb.ts:2503](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L2503)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the specific referenced source document (e.g., the ID of the actual Sales Order being evaluated).

**`Example`**

```ts
1024
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 ref_id = 2;

#### Defined in

[src/sales_invoices.scailo_pb.ts:2519](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L2519)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_invoices.scailo_pb.ts:2544](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L2544)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_invoices.scailo_pb.ts:2542](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L2542)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest"``

#### Defined in

[src/sales_invoices.scailo_pb.ts:2543](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L2543)

## Methods

### clone

▸ **clone**(): [`SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest`](SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)

Create a deep copy.

#### Returns

[`SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest`](SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Inherited from

Message.clone

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:28

___

### equals

▸ **equals**(`other`): `boolean`

Compare with a message of the same type.
Note that this function disregards extensions and unknown fields.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest`](SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest.md) \| `PlainMessage`\<[`SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest`](SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:24

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): `this`

Parse from binary data, merging fields.

Repeated fields are appended. Map entries are added, overwriting
existing keys.

If a message field is already present, it will be merged with the
new data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:38

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): `this`

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:42

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): `this`

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:46

___

### getType

▸ **getType**(): `MessageType`\<[`SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest`](SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest`](SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)\>

#### Inherited from

Message.getType

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:81

___

### toBinary

▸ **toBinary**(`options?`): `Uint8Array`

Serialize the message to binary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`BinaryWriteOptions`\> |

#### Returns

`Uint8Array`

#### Inherited from

Message.toBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:50

___

### toJSON

▸ **toJSON**(): `JsonValue`

Override for serialization behavior. This will be invoked when calling
JSON.stringify on this message (i.e. JSON.stringify(msg)).

Note that this will not serialize google.protobuf.Any with a packed
message because the protobuf JSON format specifies that it needs to be
unpacked, and this is only possible with a type registry to look up the
message type.  As a result, attempting to serialize a message with this
type will throw an Error.

This method is protected because you should not need to invoke it
directly -- instead use JSON.stringify or toJsonString for
stringified JSON.  Alternatively, if actual JSON is desired, you should
use toJson.

#### Returns

`JsonValue`

#### Inherited from

Message.toJSON

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:75

___

### toJson

▸ **toJson**(`options?`): `JsonValue`

Serialize the message to a JSON value, a JavaScript value that can be
passed to JSON.stringify().

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteOptions`\> |

#### Returns

`JsonValue`

#### Inherited from

Message.toJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:55

___

### toJsonString

▸ **toJsonString**(`options?`): `string`

Serialize the message to a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteStringOptions`\> |

#### Returns

`string`

#### Inherited from

Message.toJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:59

___

### equals

▸ **equals**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| [`SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest`](SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest.md) \| `PlainMessage`\<[`SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest`](SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)\> |
| `b` | `undefined` \| [`SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest`](SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest.md) \| `PlainMessage`\<[`SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest`](SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_invoices.scailo_pb.ts:2562](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L2562)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest`](SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest`](SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:2550](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L2550)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest`](SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest`](SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:2554](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L2554)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest`](SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest`](SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:2558](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L2558)
