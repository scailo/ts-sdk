[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesInvoiceReferencesList

# Class: SalesInvoiceReferencesList

Describes the message consisting of the list of sales invoice references

**`Generated`**

from message Scailo.SalesInvoiceReferencesList

## Hierarchy

- `Message`\<[`SalesInvoiceReferencesList`](SalesInvoiceReferencesList.md)\>

  ↳ **`SalesInvoiceReferencesList`**

## Table of contents

### Constructors

- [constructor](SalesInvoiceReferencesList.md#constructor)

### Properties

- [list](SalesInvoiceReferencesList.md#list)
- [fields](SalesInvoiceReferencesList.md#fields)
- [runtime](SalesInvoiceReferencesList.md#runtime)
- [typeName](SalesInvoiceReferencesList.md#typename)

### Methods

- [clone](SalesInvoiceReferencesList.md#clone)
- [equals](SalesInvoiceReferencesList.md#equals)
- [fromBinary](SalesInvoiceReferencesList.md#frombinary)
- [fromJson](SalesInvoiceReferencesList.md#fromjson)
- [fromJsonString](SalesInvoiceReferencesList.md#fromjsonstring)
- [getType](SalesInvoiceReferencesList.md#gettype)
- [toBinary](SalesInvoiceReferencesList.md#tobinary)
- [toJSON](SalesInvoiceReferencesList.md#tojson)
- [toJson](SalesInvoiceReferencesList.md#tojson-1)
- [toJsonString](SalesInvoiceReferencesList.md#tojsonstring)
- [equals](SalesInvoiceReferencesList.md#equals-1)
- [fromBinary](SalesInvoiceReferencesList.md#frombinary-1)
- [fromJson](SalesInvoiceReferencesList.md#fromjson-1)
- [fromJsonString](SalesInvoiceReferencesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesInvoiceReferencesList**(`data?`): [`SalesInvoiceReferencesList`](SalesInvoiceReferencesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesInvoiceReferencesList`](SalesInvoiceReferencesList.md)\> |

#### Returns

[`SalesInvoiceReferencesList`](SalesInvoiceReferencesList.md)

#### Overrides

Message\&lt;SalesInvoiceReferencesList\&gt;.constructor

#### Defined in

src/sales_invoices.scailo_pb.ts:2387

## Properties

### list

• **list**: [`SalesInvoiceReference`](SalesInvoiceReference.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.SalesInvoiceReference list = 1;

#### Defined in

src/sales_invoices.scailo_pb.ts:2385

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_invoices.scailo_pb.ts:2394

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_invoices.scailo_pb.ts:2392

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesInvoiceReferencesList"``

#### Defined in

src/sales_invoices.scailo_pb.ts:2393

## Methods

### clone

▸ **clone**(): [`SalesInvoiceReferencesList`](SalesInvoiceReferencesList.md)

Create a deep copy.

#### Returns

[`SalesInvoiceReferencesList`](SalesInvoiceReferencesList.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesInvoiceReferencesList`](SalesInvoiceReferencesList.md) \| `PlainMessage`\<[`SalesInvoiceReferencesList`](SalesInvoiceReferencesList.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesInvoiceReferencesList`](SalesInvoiceReferencesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesInvoiceReferencesList`](SalesInvoiceReferencesList.md)\>

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
| `a` | `undefined` \| [`SalesInvoiceReferencesList`](SalesInvoiceReferencesList.md) \| `PlainMessage`\<[`SalesInvoiceReferencesList`](SalesInvoiceReferencesList.md)\> |
| `b` | `undefined` \| [`SalesInvoiceReferencesList`](SalesInvoiceReferencesList.md) \| `PlainMessage`\<[`SalesInvoiceReferencesList`](SalesInvoiceReferencesList.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_invoices.scailo_pb.ts:2410

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesInvoiceReferencesList`](SalesInvoiceReferencesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesInvoiceReferencesList`](SalesInvoiceReferencesList.md)

#### Defined in

src/sales_invoices.scailo_pb.ts:2398

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesInvoiceReferencesList`](SalesInvoiceReferencesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoiceReferencesList`](SalesInvoiceReferencesList.md)

#### Defined in

src/sales_invoices.scailo_pb.ts:2402

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesInvoiceReferencesList`](SalesInvoiceReferencesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoiceReferencesList`](SalesInvoiceReferencesList.md)

#### Defined in

src/sales_invoices.scailo_pb.ts:2406
