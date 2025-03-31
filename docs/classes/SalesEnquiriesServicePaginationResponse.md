[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesEnquiriesServicePaginationResponse

# Class: SalesEnquiriesServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Scailo.SalesEnquiriesServicePaginationResponse

## Hierarchy

- `Message`\<[`SalesEnquiriesServicePaginationResponse`](SalesEnquiriesServicePaginationResponse.md)\>

  ↳ **`SalesEnquiriesServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](SalesEnquiriesServicePaginationResponse.md#constructor)

### Properties

- [count](SalesEnquiriesServicePaginationResponse.md#count)
- [offset](SalesEnquiriesServicePaginationResponse.md#offset)
- [payload](SalesEnquiriesServicePaginationResponse.md#payload)
- [total](SalesEnquiriesServicePaginationResponse.md#total)
- [fields](SalesEnquiriesServicePaginationResponse.md#fields)
- [runtime](SalesEnquiriesServicePaginationResponse.md#runtime)
- [typeName](SalesEnquiriesServicePaginationResponse.md#typename)

### Methods

- [clone](SalesEnquiriesServicePaginationResponse.md#clone)
- [equals](SalesEnquiriesServicePaginationResponse.md#equals)
- [fromBinary](SalesEnquiriesServicePaginationResponse.md#frombinary)
- [fromJson](SalesEnquiriesServicePaginationResponse.md#fromjson)
- [fromJsonString](SalesEnquiriesServicePaginationResponse.md#fromjsonstring)
- [getType](SalesEnquiriesServicePaginationResponse.md#gettype)
- [toBinary](SalesEnquiriesServicePaginationResponse.md#tobinary)
- [toJSON](SalesEnquiriesServicePaginationResponse.md#tojson)
- [toJson](SalesEnquiriesServicePaginationResponse.md#tojson-1)
- [toJsonString](SalesEnquiriesServicePaginationResponse.md#tojsonstring)
- [equals](SalesEnquiriesServicePaginationResponse.md#equals-1)
- [fromBinary](SalesEnquiriesServicePaginationResponse.md#frombinary-1)
- [fromJson](SalesEnquiriesServicePaginationResponse.md#fromjson-1)
- [fromJsonString](SalesEnquiriesServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesEnquiriesServicePaginationResponse**(`data?`): [`SalesEnquiriesServicePaginationResponse`](SalesEnquiriesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesEnquiriesServicePaginationResponse`](SalesEnquiriesServicePaginationResponse.md)\> |

#### Returns

[`SalesEnquiriesServicePaginationResponse`](SalesEnquiriesServicePaginationResponse.md)

#### Overrides

Message\&lt;SalesEnquiriesServicePaginationResponse\&gt;.constructor

#### Defined in

src/sales_enquiries.scailo_pb.ts:1705

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

src/sales_enquiries.scailo_pb.ts:1682

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

src/sales_enquiries.scailo_pb.ts:1689

___

### payload

• **payload**: [`SalesEnquiry`](SalesEnquiry.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.SalesEnquiry payload = 4;

#### Defined in

src/sales_enquiries.scailo_pb.ts:1703

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

src/sales_enquiries.scailo_pb.ts:1696

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_enquiries.scailo_pb.ts:1712

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_enquiries.scailo_pb.ts:1710

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesEnquiriesServicePaginationResponse"``

#### Defined in

src/sales_enquiries.scailo_pb.ts:1711

## Methods

### clone

▸ **clone**(): [`SalesEnquiriesServicePaginationResponse`](SalesEnquiriesServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`SalesEnquiriesServicePaginationResponse`](SalesEnquiriesServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesEnquiriesServicePaginationResponse`](SalesEnquiriesServicePaginationResponse.md) \| `PlainMessage`\<[`SalesEnquiriesServicePaginationResponse`](SalesEnquiriesServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesEnquiriesServicePaginationResponse`](SalesEnquiriesServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesEnquiriesServicePaginationResponse`](SalesEnquiriesServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`SalesEnquiriesServicePaginationResponse`](SalesEnquiriesServicePaginationResponse.md) \| `PlainMessage`\<[`SalesEnquiriesServicePaginationResponse`](SalesEnquiriesServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`SalesEnquiriesServicePaginationResponse`](SalesEnquiriesServicePaginationResponse.md) \| `PlainMessage`\<[`SalesEnquiriesServicePaginationResponse`](SalesEnquiriesServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_enquiries.scailo_pb.ts:1731

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesEnquiriesServicePaginationResponse`](SalesEnquiriesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesEnquiriesServicePaginationResponse`](SalesEnquiriesServicePaginationResponse.md)

#### Defined in

src/sales_enquiries.scailo_pb.ts:1719

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesEnquiriesServicePaginationResponse`](SalesEnquiriesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServicePaginationResponse`](SalesEnquiriesServicePaginationResponse.md)

#### Defined in

src/sales_enquiries.scailo_pb.ts:1723

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesEnquiriesServicePaginationResponse`](SalesEnquiriesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServicePaginationResponse`](SalesEnquiriesServicePaginationResponse.md)

#### Defined in

src/sales_enquiries.scailo_pb.ts:1727
