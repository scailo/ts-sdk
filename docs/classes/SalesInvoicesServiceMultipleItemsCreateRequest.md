[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesInvoicesServiceMultipleItemsCreateRequest

# Class: SalesInvoicesServiceMultipleItemsCreateRequest

Request message for appending multiple line items to a Sales Invoice in a single batch transaction.
Optimized for scenarios like invoice imports or autofill operations where dozens of items
are attached simultaneously to a parent record.

**`Generated`**

from message Scailo.SalesInvoicesServiceMultipleItemsCreateRequest

## Hierarchy

- `Message`\<[`SalesInvoicesServiceMultipleItemsCreateRequest`](SalesInvoicesServiceMultipleItemsCreateRequest.md)\>

  ↳ **`SalesInvoicesServiceMultipleItemsCreateRequest`**

## Table of contents

### Constructors

- [constructor](SalesInvoicesServiceMultipleItemsCreateRequest.md#constructor)

### Properties

- [list](SalesInvoicesServiceMultipleItemsCreateRequest.md#list)
- [salesInvoiceId](SalesInvoicesServiceMultipleItemsCreateRequest.md#salesinvoiceid)
- [userComment](SalesInvoicesServiceMultipleItemsCreateRequest.md#usercomment)
- [fields](SalesInvoicesServiceMultipleItemsCreateRequest.md#fields)
- [runtime](SalesInvoicesServiceMultipleItemsCreateRequest.md#runtime)
- [typeName](SalesInvoicesServiceMultipleItemsCreateRequest.md#typename)

### Methods

- [clone](SalesInvoicesServiceMultipleItemsCreateRequest.md#clone)
- [equals](SalesInvoicesServiceMultipleItemsCreateRequest.md#equals)
- [fromBinary](SalesInvoicesServiceMultipleItemsCreateRequest.md#frombinary)
- [fromJson](SalesInvoicesServiceMultipleItemsCreateRequest.md#fromjson)
- [fromJsonString](SalesInvoicesServiceMultipleItemsCreateRequest.md#fromjsonstring)
- [getType](SalesInvoicesServiceMultipleItemsCreateRequest.md#gettype)
- [toBinary](SalesInvoicesServiceMultipleItemsCreateRequest.md#tobinary)
- [toJSON](SalesInvoicesServiceMultipleItemsCreateRequest.md#tojson)
- [toJson](SalesInvoicesServiceMultipleItemsCreateRequest.md#tojson-1)
- [toJsonString](SalesInvoicesServiceMultipleItemsCreateRequest.md#tojsonstring)
- [equals](SalesInvoicesServiceMultipleItemsCreateRequest.md#equals-1)
- [fromBinary](SalesInvoicesServiceMultipleItemsCreateRequest.md#frombinary-1)
- [fromJson](SalesInvoicesServiceMultipleItemsCreateRequest.md#fromjson-1)
- [fromJsonString](SalesInvoicesServiceMultipleItemsCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesInvoicesServiceMultipleItemsCreateRequest**(`data?`): [`SalesInvoicesServiceMultipleItemsCreateRequest`](SalesInvoicesServiceMultipleItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesInvoicesServiceMultipleItemsCreateRequest`](SalesInvoicesServiceMultipleItemsCreateRequest.md)\> |

#### Returns

[`SalesInvoicesServiceMultipleItemsCreateRequest`](SalesInvoicesServiceMultipleItemsCreateRequest.md)

#### Overrides

Message\&lt;SalesInvoicesServiceMultipleItemsCreateRequest\&gt;.constructor

#### Defined in

[src/sales_invoices.scailo_pb.ts:1723](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L1723)

## Properties

### list

• **list**: [`SalesInvoicesServiceMultipleItemsSingleton`](SalesInvoicesServiceMultipleItemsSingleton.md)[] = `[]`

**`Mandatory`**

**`Description`**

An array containing the individual line item payloads to be appended to the invoice.

**`Example`**

```ts
[]
```

**`Format`**

Repeated array of SalesInvoicesServiceMultipleItemsSingleton message blocks.

**`Generated`**

from field: repeated Scailo.SalesInvoicesServiceMultipleItemsSingleton list = 11;

#### Defined in

[src/sales_invoices.scailo_pb.ts:1721](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L1721)

___

### salesInvoiceId

• **salesInvoiceId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the parent sales invoice to which this batch of items will be attached.

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

[src/sales_invoices.scailo_pb.ts:1707](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L1707)

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

[src/sales_invoices.scailo_pb.ts:1691](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L1691)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_invoices.scailo_pb.ts:1730](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L1730)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_invoices.scailo_pb.ts:1728](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L1728)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesInvoicesServiceMultipleItemsCreateRequest"``

#### Defined in

[src/sales_invoices.scailo_pb.ts:1729](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L1729)

## Methods

### clone

▸ **clone**(): [`SalesInvoicesServiceMultipleItemsCreateRequest`](SalesInvoicesServiceMultipleItemsCreateRequest.md)

Create a deep copy.

#### Returns

[`SalesInvoicesServiceMultipleItemsCreateRequest`](SalesInvoicesServiceMultipleItemsCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesInvoicesServiceMultipleItemsCreateRequest`](SalesInvoicesServiceMultipleItemsCreateRequest.md) \| `PlainMessage`\<[`SalesInvoicesServiceMultipleItemsCreateRequest`](SalesInvoicesServiceMultipleItemsCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesInvoicesServiceMultipleItemsCreateRequest`](SalesInvoicesServiceMultipleItemsCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesInvoicesServiceMultipleItemsCreateRequest`](SalesInvoicesServiceMultipleItemsCreateRequest.md)\>

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
| `a` | `undefined` \| [`SalesInvoicesServiceMultipleItemsCreateRequest`](SalesInvoicesServiceMultipleItemsCreateRequest.md) \| `PlainMessage`\<[`SalesInvoicesServiceMultipleItemsCreateRequest`](SalesInvoicesServiceMultipleItemsCreateRequest.md)\> |
| `b` | `undefined` \| [`SalesInvoicesServiceMultipleItemsCreateRequest`](SalesInvoicesServiceMultipleItemsCreateRequest.md) \| `PlainMessage`\<[`SalesInvoicesServiceMultipleItemsCreateRequest`](SalesInvoicesServiceMultipleItemsCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_invoices.scailo_pb.ts:1748](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L1748)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesInvoicesServiceMultipleItemsCreateRequest`](SalesInvoicesServiceMultipleItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesInvoicesServiceMultipleItemsCreateRequest`](SalesInvoicesServiceMultipleItemsCreateRequest.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:1736](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L1736)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesInvoicesServiceMultipleItemsCreateRequest`](SalesInvoicesServiceMultipleItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoicesServiceMultipleItemsCreateRequest`](SalesInvoicesServiceMultipleItemsCreateRequest.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:1740](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L1740)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesInvoicesServiceMultipleItemsCreateRequest`](SalesInvoicesServiceMultipleItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoicesServiceMultipleItemsCreateRequest`](SalesInvoicesServiceMultipleItemsCreateRequest.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:1744](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L1744)
