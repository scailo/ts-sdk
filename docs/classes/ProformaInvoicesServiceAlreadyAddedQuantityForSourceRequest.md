[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest

# Class: ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest

Represents the request payload utilized to retrieve the cumulative quantity of a specific family
that has already been included in preliminary or proforma invoices against a given source document.

**Note:** This query acts as a critical safeguard during the pre-billing phase. It evaluates
historical estimations to prevent frontend clients and downstream APIs from estimating or
requesting advance payment for more items than were originally constrained in the parent document (e.g., a Sales Order).

**`Generated`**

from message Scailo.ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest

## Hierarchy

- `Message`\<[`ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest`](ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)\>

  ↳ **`ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest`**

## Table of contents

### Constructors

- [constructor](ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#constructor)

### Properties

- [familyId](ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#familyid)
- [refFrom](ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#reffrom)
- [refId](ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#refid)
- [fields](ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#fields)
- [runtime](ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#runtime)
- [typeName](ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#typename)

### Methods

- [clone](ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#clone)
- [equals](ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#equals)
- [fromBinary](ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#frombinary)
- [fromJson](ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#fromjson)
- [fromJsonString](ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#fromjsonstring)
- [getType](ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#gettype)
- [toBinary](ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#tobinary)
- [toJSON](ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#tojson)
- [toJson](ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#tojson-1)
- [toJsonString](ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#tojsonstring)
- [equals](ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#equals-1)
- [fromBinary](ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#frombinary-1)
- [fromJson](ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#fromjson-1)
- [fromJsonString](ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest**(`data?`): [`ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest`](ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest`](ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)\> |

#### Returns

[`ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest`](ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Overrides

Message\&lt;ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest\&gt;.constructor

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2581](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L2581)

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

[src/proforma_invoices.scailo_pb.ts:2579](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L2579)

___

### refFrom

• **refFrom**: [`PROFORMA_INVOICE_REF_FROM`](../enums/PROFORMA_INVOICE_REF_FROM.md) = `PROFORMA_INVOICE_REF_FROM.PROFORMA_INVOICE_REF_FROM_ANY_UNSPECIFIED`

**`Mandatory`**

**`Description`**

The specific module or record type from which the preliminary invoice originates and against which the estimated quantity is being checked (e.g., Sales Order).

**`Example`**

```ts
"PROFORMA_INVOICE_REF_FROM_SALES_ORDER"
```

**`Regex`**

^[A-Z_]+$

**`Format`**

Valid PROFORMA_INVOICE_REF_FROM enum value. Cannot be unspecified (0).

**`Generated`**

from field: Scailo.PROFORMA_INVOICE_REF_FROM ref_from = 1;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2547](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L2547)

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

[src/proforma_invoices.scailo_pb.ts:2563](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L2563)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2588](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L2588)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2586](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L2586)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest"``

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2587](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L2587)

## Methods

### clone

▸ **clone**(): [`ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest`](ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)

Create a deep copy.

#### Returns

[`ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest`](ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest`](ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest.md) \| `PlainMessage`\<[`ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest`](ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest`](ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest`](ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)\>

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
| `a` | `undefined` \| [`ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest`](ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest.md) \| `PlainMessage`\<[`ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest`](ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)\> |
| `b` | `undefined` \| [`ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest`](ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest.md) \| `PlainMessage`\<[`ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest`](ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2606](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L2606)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest`](ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest`](ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2594](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L2594)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest`](ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest`](ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2598](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L2598)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest`](ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest`](ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2602](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L2602)
