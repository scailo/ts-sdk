[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProformaInvoicesServicePaginatedItemsResponse

# Class: ProformaInvoicesServicePaginatedItemsResponse

Describes the response to a pagination items request

**`Generated`**

from message Scailo.ProformaInvoicesServicePaginatedItemsResponse

## Hierarchy

- `Message`\<[`ProformaInvoicesServicePaginatedItemsResponse`](ProformaInvoicesServicePaginatedItemsResponse.md)\>

  ↳ **`ProformaInvoicesServicePaginatedItemsResponse`**

## Table of contents

### Constructors

- [constructor](ProformaInvoicesServicePaginatedItemsResponse.md#constructor)

### Properties

- [count](ProformaInvoicesServicePaginatedItemsResponse.md#count)
- [offset](ProformaInvoicesServicePaginatedItemsResponse.md#offset)
- [payload](ProformaInvoicesServicePaginatedItemsResponse.md#payload)
- [total](ProformaInvoicesServicePaginatedItemsResponse.md#total)
- [fields](ProformaInvoicesServicePaginatedItemsResponse.md#fields)
- [runtime](ProformaInvoicesServicePaginatedItemsResponse.md#runtime)
- [typeName](ProformaInvoicesServicePaginatedItemsResponse.md#typename)

### Methods

- [clone](ProformaInvoicesServicePaginatedItemsResponse.md#clone)
- [equals](ProformaInvoicesServicePaginatedItemsResponse.md#equals)
- [fromBinary](ProformaInvoicesServicePaginatedItemsResponse.md#frombinary)
- [fromJson](ProformaInvoicesServicePaginatedItemsResponse.md#fromjson)
- [fromJsonString](ProformaInvoicesServicePaginatedItemsResponse.md#fromjsonstring)
- [getType](ProformaInvoicesServicePaginatedItemsResponse.md#gettype)
- [toBinary](ProformaInvoicesServicePaginatedItemsResponse.md#tobinary)
- [toJSON](ProformaInvoicesServicePaginatedItemsResponse.md#tojson)
- [toJson](ProformaInvoicesServicePaginatedItemsResponse.md#tojson-1)
- [toJsonString](ProformaInvoicesServicePaginatedItemsResponse.md#tojsonstring)
- [equals](ProformaInvoicesServicePaginatedItemsResponse.md#equals-1)
- [fromBinary](ProformaInvoicesServicePaginatedItemsResponse.md#frombinary-1)
- [fromJson](ProformaInvoicesServicePaginatedItemsResponse.md#fromjson-1)
- [fromJsonString](ProformaInvoicesServicePaginatedItemsResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProformaInvoicesServicePaginatedItemsResponse**(`data?`): [`ProformaInvoicesServicePaginatedItemsResponse`](ProformaInvoicesServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProformaInvoicesServicePaginatedItemsResponse`](ProformaInvoicesServicePaginatedItemsResponse.md)\> |

#### Returns

[`ProformaInvoicesServicePaginatedItemsResponse`](ProformaInvoicesServicePaginatedItemsResponse.md)

#### Overrides

Message\&lt;ProformaInvoicesServicePaginatedItemsResponse\&gt;.constructor

#### Defined in

src/proforma_invoices.scailo_pb.ts:2539

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2516

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2523

___

### payload

• **payload**: [`ProformaInvoiceItem`](ProformaInvoiceItem.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.ProformaInvoiceItem payload = 4;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2537

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

src/proforma_invoices.scailo_pb.ts:2530

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/proforma_invoices.scailo_pb.ts:2546

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/proforma_invoices.scailo_pb.ts:2544

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProformaInvoicesServicePaginatedItemsResponse"``

#### Defined in

src/proforma_invoices.scailo_pb.ts:2545

## Methods

### clone

▸ **clone**(): [`ProformaInvoicesServicePaginatedItemsResponse`](ProformaInvoicesServicePaginatedItemsResponse.md)

Create a deep copy.

#### Returns

[`ProformaInvoicesServicePaginatedItemsResponse`](ProformaInvoicesServicePaginatedItemsResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`ProformaInvoicesServicePaginatedItemsResponse`](ProformaInvoicesServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`ProformaInvoicesServicePaginatedItemsResponse`](ProformaInvoicesServicePaginatedItemsResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProformaInvoicesServicePaginatedItemsResponse`](ProformaInvoicesServicePaginatedItemsResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProformaInvoicesServicePaginatedItemsResponse`](ProformaInvoicesServicePaginatedItemsResponse.md)\>

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
| `a` | `undefined` \| [`ProformaInvoicesServicePaginatedItemsResponse`](ProformaInvoicesServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`ProformaInvoicesServicePaginatedItemsResponse`](ProformaInvoicesServicePaginatedItemsResponse.md)\> |
| `b` | `undefined` \| [`ProformaInvoicesServicePaginatedItemsResponse`](ProformaInvoicesServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`ProformaInvoicesServicePaginatedItemsResponse`](ProformaInvoicesServicePaginatedItemsResponse.md)\> |

#### Returns

`boolean`

#### Defined in

src/proforma_invoices.scailo_pb.ts:2565

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProformaInvoicesServicePaginatedItemsResponse`](ProformaInvoicesServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProformaInvoicesServicePaginatedItemsResponse`](ProformaInvoicesServicePaginatedItemsResponse.md)

#### Defined in

src/proforma_invoices.scailo_pb.ts:2553

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProformaInvoicesServicePaginatedItemsResponse`](ProformaInvoicesServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoicesServicePaginatedItemsResponse`](ProformaInvoicesServicePaginatedItemsResponse.md)

#### Defined in

src/proforma_invoices.scailo_pb.ts:2557

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProformaInvoicesServicePaginatedItemsResponse`](ProformaInvoicesServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoicesServicePaginatedItemsResponse`](ProformaInvoicesServicePaginatedItemsResponse.md)

#### Defined in

src/proforma_invoices.scailo_pb.ts:2561
