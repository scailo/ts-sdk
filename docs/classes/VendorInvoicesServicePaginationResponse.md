[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorInvoicesServicePaginationResponse

# Class: VendorInvoicesServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Scailo.VendorInvoicesServicePaginationResponse

## Hierarchy

- `Message`\<[`VendorInvoicesServicePaginationResponse`](VendorInvoicesServicePaginationResponse.md)\>

  ↳ **`VendorInvoicesServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](VendorInvoicesServicePaginationResponse.md#constructor)

### Properties

- [count](VendorInvoicesServicePaginationResponse.md#count)
- [offset](VendorInvoicesServicePaginationResponse.md#offset)
- [payload](VendorInvoicesServicePaginationResponse.md#payload)
- [total](VendorInvoicesServicePaginationResponse.md#total)
- [fields](VendorInvoicesServicePaginationResponse.md#fields)
- [runtime](VendorInvoicesServicePaginationResponse.md#runtime)
- [typeName](VendorInvoicesServicePaginationResponse.md#typename)

### Methods

- [clone](VendorInvoicesServicePaginationResponse.md#clone)
- [equals](VendorInvoicesServicePaginationResponse.md#equals)
- [fromBinary](VendorInvoicesServicePaginationResponse.md#frombinary)
- [fromJson](VendorInvoicesServicePaginationResponse.md#fromjson)
- [fromJsonString](VendorInvoicesServicePaginationResponse.md#fromjsonstring)
- [getType](VendorInvoicesServicePaginationResponse.md#gettype)
- [toBinary](VendorInvoicesServicePaginationResponse.md#tobinary)
- [toJSON](VendorInvoicesServicePaginationResponse.md#tojson)
- [toJson](VendorInvoicesServicePaginationResponse.md#tojson-1)
- [toJsonString](VendorInvoicesServicePaginationResponse.md#tojsonstring)
- [equals](VendorInvoicesServicePaginationResponse.md#equals-1)
- [fromBinary](VendorInvoicesServicePaginationResponse.md#frombinary-1)
- [fromJson](VendorInvoicesServicePaginationResponse.md#fromjson-1)
- [fromJsonString](VendorInvoicesServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorInvoicesServicePaginationResponse**(`data?`): [`VendorInvoicesServicePaginationResponse`](VendorInvoicesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorInvoicesServicePaginationResponse`](VendorInvoicesServicePaginationResponse.md)\> |

#### Returns

[`VendorInvoicesServicePaginationResponse`](VendorInvoicesServicePaginationResponse.md)

#### Overrides

Message\&lt;VendorInvoicesServicePaginationResponse\&gt;.constructor

#### Defined in

src/vendor_invoices.scailo_pb.ts:1537

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

src/vendor_invoices.scailo_pb.ts:1514

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

src/vendor_invoices.scailo_pb.ts:1521

___

### payload

• **payload**: [`VendorInvoice`](VendorInvoice.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.VendorInvoice payload = 4;

#### Defined in

src/vendor_invoices.scailo_pb.ts:1535

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

src/vendor_invoices.scailo_pb.ts:1528

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vendor_invoices.scailo_pb.ts:1544

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vendor_invoices.scailo_pb.ts:1542

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorInvoicesServicePaginationResponse"``

#### Defined in

src/vendor_invoices.scailo_pb.ts:1543

## Methods

### clone

▸ **clone**(): [`VendorInvoicesServicePaginationResponse`](VendorInvoicesServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`VendorInvoicesServicePaginationResponse`](VendorInvoicesServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorInvoicesServicePaginationResponse`](VendorInvoicesServicePaginationResponse.md) \| `PlainMessage`\<[`VendorInvoicesServicePaginationResponse`](VendorInvoicesServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorInvoicesServicePaginationResponse`](VendorInvoicesServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorInvoicesServicePaginationResponse`](VendorInvoicesServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`VendorInvoicesServicePaginationResponse`](VendorInvoicesServicePaginationResponse.md) \| `PlainMessage`\<[`VendorInvoicesServicePaginationResponse`](VendorInvoicesServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`VendorInvoicesServicePaginationResponse`](VendorInvoicesServicePaginationResponse.md) \| `PlainMessage`\<[`VendorInvoicesServicePaginationResponse`](VendorInvoicesServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

src/vendor_invoices.scailo_pb.ts:1563

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorInvoicesServicePaginationResponse`](VendorInvoicesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorInvoicesServicePaginationResponse`](VendorInvoicesServicePaginationResponse.md)

#### Defined in

src/vendor_invoices.scailo_pb.ts:1551

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorInvoicesServicePaginationResponse`](VendorInvoicesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoicesServicePaginationResponse`](VendorInvoicesServicePaginationResponse.md)

#### Defined in

src/vendor_invoices.scailo_pb.ts:1555

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorInvoicesServicePaginationResponse`](VendorInvoicesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoicesServicePaginationResponse`](VendorInvoicesServicePaginationResponse.md)

#### Defined in

src/vendor_invoices.scailo_pb.ts:1559
