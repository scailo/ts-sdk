[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / QCGroupsServicePaginationResponse

# Class: QCGroupsServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Scailo.QCGroupsServicePaginationResponse

## Hierarchy

- `Message`\<[`QCGroupsServicePaginationResponse`](QCGroupsServicePaginationResponse.md)\>

  ↳ **`QCGroupsServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](QCGroupsServicePaginationResponse.md#constructor)

### Properties

- [count](QCGroupsServicePaginationResponse.md#count)
- [offset](QCGroupsServicePaginationResponse.md#offset)
- [payload](QCGroupsServicePaginationResponse.md#payload)
- [total](QCGroupsServicePaginationResponse.md#total)
- [fields](QCGroupsServicePaginationResponse.md#fields)
- [runtime](QCGroupsServicePaginationResponse.md#runtime)
- [typeName](QCGroupsServicePaginationResponse.md#typename)

### Methods

- [clone](QCGroupsServicePaginationResponse.md#clone)
- [equals](QCGroupsServicePaginationResponse.md#equals)
- [fromBinary](QCGroupsServicePaginationResponse.md#frombinary)
- [fromJson](QCGroupsServicePaginationResponse.md#fromjson)
- [fromJsonString](QCGroupsServicePaginationResponse.md#fromjsonstring)
- [getType](QCGroupsServicePaginationResponse.md#gettype)
- [toBinary](QCGroupsServicePaginationResponse.md#tobinary)
- [toJSON](QCGroupsServicePaginationResponse.md#tojson)
- [toJson](QCGroupsServicePaginationResponse.md#tojson-1)
- [toJsonString](QCGroupsServicePaginationResponse.md#tojsonstring)
- [equals](QCGroupsServicePaginationResponse.md#equals-1)
- [fromBinary](QCGroupsServicePaginationResponse.md#frombinary-1)
- [fromJson](QCGroupsServicePaginationResponse.md#fromjson-1)
- [fromJsonString](QCGroupsServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCGroupsServicePaginationResponse**(`data?`): [`QCGroupsServicePaginationResponse`](QCGroupsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QCGroupsServicePaginationResponse`](QCGroupsServicePaginationResponse.md)\> |

#### Returns

[`QCGroupsServicePaginationResponse`](QCGroupsServicePaginationResponse.md)

#### Overrides

Message\&lt;QCGroupsServicePaginationResponse\&gt;.constructor

#### Defined in

src/qc_groups.scailo_pb.ts:1128

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

src/qc_groups.scailo_pb.ts:1105

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

src/qc_groups.scailo_pb.ts:1112

___

### payload

• **payload**: [`QCGroup`](QCGroup.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.QCGroup payload = 4;

#### Defined in

src/qc_groups.scailo_pb.ts:1126

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

src/qc_groups.scailo_pb.ts:1119

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/qc_groups.scailo_pb.ts:1135

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/qc_groups.scailo_pb.ts:1133

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QCGroupsServicePaginationResponse"``

#### Defined in

src/qc_groups.scailo_pb.ts:1134

## Methods

### clone

▸ **clone**(): [`QCGroupsServicePaginationResponse`](QCGroupsServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`QCGroupsServicePaginationResponse`](QCGroupsServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`QCGroupsServicePaginationResponse`](QCGroupsServicePaginationResponse.md) \| `PlainMessage`\<[`QCGroupsServicePaginationResponse`](QCGroupsServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`QCGroupsServicePaginationResponse`](QCGroupsServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QCGroupsServicePaginationResponse`](QCGroupsServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`QCGroupsServicePaginationResponse`](QCGroupsServicePaginationResponse.md) \| `PlainMessage`\<[`QCGroupsServicePaginationResponse`](QCGroupsServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`QCGroupsServicePaginationResponse`](QCGroupsServicePaginationResponse.md) \| `PlainMessage`\<[`QCGroupsServicePaginationResponse`](QCGroupsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

src/qc_groups.scailo_pb.ts:1154

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCGroupsServicePaginationResponse`](QCGroupsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QCGroupsServicePaginationResponse`](QCGroupsServicePaginationResponse.md)

#### Defined in

src/qc_groups.scailo_pb.ts:1142

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCGroupsServicePaginationResponse`](QCGroupsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCGroupsServicePaginationResponse`](QCGroupsServicePaginationResponse.md)

#### Defined in

src/qc_groups.scailo_pb.ts:1146

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCGroupsServicePaginationResponse`](QCGroupsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCGroupsServicePaginationResponse`](QCGroupsServicePaginationResponse.md)

#### Defined in

src/qc_groups.scailo_pb.ts:1150
