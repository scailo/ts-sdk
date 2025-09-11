[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LocationsServicePaginationResponse

# Class: LocationsServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Scailo.LocationsServicePaginationResponse

## Hierarchy

- `Message`\<[`LocationsServicePaginationResponse`](LocationsServicePaginationResponse.md)\>

  ↳ **`LocationsServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](LocationsServicePaginationResponse.md#constructor)

### Properties

- [count](LocationsServicePaginationResponse.md#count)
- [offset](LocationsServicePaginationResponse.md#offset)
- [payload](LocationsServicePaginationResponse.md#payload)
- [total](LocationsServicePaginationResponse.md#total)
- [fields](LocationsServicePaginationResponse.md#fields)
- [runtime](LocationsServicePaginationResponse.md#runtime)
- [typeName](LocationsServicePaginationResponse.md#typename)

### Methods

- [clone](LocationsServicePaginationResponse.md#clone)
- [equals](LocationsServicePaginationResponse.md#equals)
- [fromBinary](LocationsServicePaginationResponse.md#frombinary)
- [fromJson](LocationsServicePaginationResponse.md#fromjson)
- [fromJsonString](LocationsServicePaginationResponse.md#fromjsonstring)
- [getType](LocationsServicePaginationResponse.md#gettype)
- [toBinary](LocationsServicePaginationResponse.md#tobinary)
- [toJSON](LocationsServicePaginationResponse.md#tojson)
- [toJson](LocationsServicePaginationResponse.md#tojson-1)
- [toJsonString](LocationsServicePaginationResponse.md#tojsonstring)
- [equals](LocationsServicePaginationResponse.md#equals-1)
- [fromBinary](LocationsServicePaginationResponse.md#frombinary-1)
- [fromJson](LocationsServicePaginationResponse.md#fromjson-1)
- [fromJsonString](LocationsServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new LocationsServicePaginationResponse**(`data?`): [`LocationsServicePaginationResponse`](LocationsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LocationsServicePaginationResponse`](LocationsServicePaginationResponse.md)\> |

#### Returns

[`LocationsServicePaginationResponse`](LocationsServicePaginationResponse.md)

#### Overrides

Message\&lt;LocationsServicePaginationResponse\&gt;.constructor

#### Defined in

src/locations.scailo_pb.ts:592

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

src/locations.scailo_pb.ts:569

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

src/locations.scailo_pb.ts:576

___

### payload

• **payload**: [`Location`](Location.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.Location payload = 4;

#### Defined in

src/locations.scailo_pb.ts:590

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

src/locations.scailo_pb.ts:583

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/locations.scailo_pb.ts:599

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/locations.scailo_pb.ts:597

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LocationsServicePaginationResponse"``

#### Defined in

src/locations.scailo_pb.ts:598

## Methods

### clone

▸ **clone**(): [`LocationsServicePaginationResponse`](LocationsServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`LocationsServicePaginationResponse`](LocationsServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`LocationsServicePaginationResponse`](LocationsServicePaginationResponse.md) \| `PlainMessage`\<[`LocationsServicePaginationResponse`](LocationsServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`LocationsServicePaginationResponse`](LocationsServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LocationsServicePaginationResponse`](LocationsServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`LocationsServicePaginationResponse`](LocationsServicePaginationResponse.md) \| `PlainMessage`\<[`LocationsServicePaginationResponse`](LocationsServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`LocationsServicePaginationResponse`](LocationsServicePaginationResponse.md) \| `PlainMessage`\<[`LocationsServicePaginationResponse`](LocationsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

src/locations.scailo_pb.ts:618

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LocationsServicePaginationResponse`](LocationsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LocationsServicePaginationResponse`](LocationsServicePaginationResponse.md)

#### Defined in

src/locations.scailo_pb.ts:606

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LocationsServicePaginationResponse`](LocationsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LocationsServicePaginationResponse`](LocationsServicePaginationResponse.md)

#### Defined in

src/locations.scailo_pb.ts:610

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LocationsServicePaginationResponse`](LocationsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LocationsServicePaginationResponse`](LocationsServicePaginationResponse.md)

#### Defined in

src/locations.scailo_pb.ts:614
