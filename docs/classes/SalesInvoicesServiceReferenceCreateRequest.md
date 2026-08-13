[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesInvoicesServiceReferenceCreateRequest

# Class: SalesInvoicesServiceReferenceCreateRequest

Request message for creating and linking a Goods Dispatch reference to a Sales Invoice.
This operation establishes a verifiable, structural relationship between the financial billing document (Invoice)
and the physical fulfillment document (Goods Dispatch) that lists the physical goods dispatched from a warehouse or store.

**Note:** Attaching this reference ensures strict traceability, proving that physical inventory has left
the facility to justify the financial charges being levied against the buyer.

**`Generated`**

from message Scailo.SalesInvoicesServiceReferenceCreateRequest

## Hierarchy

- `Message`\<[`SalesInvoicesServiceReferenceCreateRequest`](SalesInvoicesServiceReferenceCreateRequest.md)\>

  ↳ **`SalesInvoicesServiceReferenceCreateRequest`**

## Table of contents

### Constructors

- [constructor](SalesInvoicesServiceReferenceCreateRequest.md#constructor)

### Properties

- [goodsDispatchId](SalesInvoicesServiceReferenceCreateRequest.md#goodsdispatchid)
- [salesInvoiceId](SalesInvoicesServiceReferenceCreateRequest.md#salesinvoiceid)
- [userComment](SalesInvoicesServiceReferenceCreateRequest.md#usercomment)
- [fields](SalesInvoicesServiceReferenceCreateRequest.md#fields)
- [runtime](SalesInvoicesServiceReferenceCreateRequest.md#runtime)
- [typeName](SalesInvoicesServiceReferenceCreateRequest.md#typename)

### Methods

- [clone](SalesInvoicesServiceReferenceCreateRequest.md#clone)
- [equals](SalesInvoicesServiceReferenceCreateRequest.md#equals)
- [fromBinary](SalesInvoicesServiceReferenceCreateRequest.md#frombinary)
- [fromJson](SalesInvoicesServiceReferenceCreateRequest.md#fromjson)
- [fromJsonString](SalesInvoicesServiceReferenceCreateRequest.md#fromjsonstring)
- [getType](SalesInvoicesServiceReferenceCreateRequest.md#gettype)
- [toBinary](SalesInvoicesServiceReferenceCreateRequest.md#tobinary)
- [toJSON](SalesInvoicesServiceReferenceCreateRequest.md#tojson)
- [toJson](SalesInvoicesServiceReferenceCreateRequest.md#tojson-1)
- [toJsonString](SalesInvoicesServiceReferenceCreateRequest.md#tojsonstring)
- [equals](SalesInvoicesServiceReferenceCreateRequest.md#equals-1)
- [fromBinary](SalesInvoicesServiceReferenceCreateRequest.md#frombinary-1)
- [fromJson](SalesInvoicesServiceReferenceCreateRequest.md#fromjson-1)
- [fromJsonString](SalesInvoicesServiceReferenceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesInvoicesServiceReferenceCreateRequest**(`data?`): [`SalesInvoicesServiceReferenceCreateRequest`](SalesInvoicesServiceReferenceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesInvoicesServiceReferenceCreateRequest`](SalesInvoicesServiceReferenceCreateRequest.md)\> |

#### Returns

[`SalesInvoicesServiceReferenceCreateRequest`](SalesInvoicesServiceReferenceCreateRequest.md)

#### Overrides

Message\&lt;SalesInvoicesServiceReferenceCreateRequest\&gt;.constructor

#### Defined in

[src/sales_invoices.scailo_pb.ts:4054](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L4054)

## Properties

### goodsDispatchId

• **goodsDispatchId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the corresponding Goods Dispatch document, verifying the physical fulfillment of goods associated with this invoice.

**`Example`**

```ts
450
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 goods_dispatch_id = 11;

#### Defined in

[src/sales_invoices.scailo_pb.ts:4052](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L4052)

___

### salesInvoiceId

• **salesInvoiceId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the parent sales invoice to which this goods dispatch reference is being attached.

**`Example`**

```ts
1024
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 sales_invoice_id = 10;

#### Defined in

[src/sales_invoices.scailo_pb.ts:4036](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L4036)

___

### userComment

• `Optional` **userComment**: `string`

**`Optional`**

**`Description`**

Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.

**`Example`**

```ts
"This is a comment for audit purposes."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string user_comment = 1;

#### Defined in

[src/sales_invoices.scailo_pb.ts:4020](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L4020)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_invoices.scailo_pb.ts:4061](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L4061)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_invoices.scailo_pb.ts:4059](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L4059)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesInvoicesServiceReferenceCreateRequest"``

#### Defined in

[src/sales_invoices.scailo_pb.ts:4060](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L4060)

## Methods

### clone

▸ **clone**(): [`SalesInvoicesServiceReferenceCreateRequest`](SalesInvoicesServiceReferenceCreateRequest.md)

Create a deep copy.

#### Returns

[`SalesInvoicesServiceReferenceCreateRequest`](SalesInvoicesServiceReferenceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesInvoicesServiceReferenceCreateRequest`](SalesInvoicesServiceReferenceCreateRequest.md) \| `PlainMessage`\<[`SalesInvoicesServiceReferenceCreateRequest`](SalesInvoicesServiceReferenceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesInvoicesServiceReferenceCreateRequest`](SalesInvoicesServiceReferenceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesInvoicesServiceReferenceCreateRequest`](SalesInvoicesServiceReferenceCreateRequest.md)\>

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
| `a` | `undefined` \| [`SalesInvoicesServiceReferenceCreateRequest`](SalesInvoicesServiceReferenceCreateRequest.md) \| `PlainMessage`\<[`SalesInvoicesServiceReferenceCreateRequest`](SalesInvoicesServiceReferenceCreateRequest.md)\> |
| `b` | `undefined` \| [`SalesInvoicesServiceReferenceCreateRequest`](SalesInvoicesServiceReferenceCreateRequest.md) \| `PlainMessage`\<[`SalesInvoicesServiceReferenceCreateRequest`](SalesInvoicesServiceReferenceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_invoices.scailo_pb.ts:4079](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L4079)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesInvoicesServiceReferenceCreateRequest`](SalesInvoicesServiceReferenceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesInvoicesServiceReferenceCreateRequest`](SalesInvoicesServiceReferenceCreateRequest.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:4067](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L4067)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesInvoicesServiceReferenceCreateRequest`](SalesInvoicesServiceReferenceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoicesServiceReferenceCreateRequest`](SalesInvoicesServiceReferenceCreateRequest.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:4071](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L4071)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesInvoicesServiceReferenceCreateRequest`](SalesInvoicesServiceReferenceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoicesServiceReferenceCreateRequest`](SalesInvoicesServiceReferenceCreateRequest.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:4075](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L4075)
