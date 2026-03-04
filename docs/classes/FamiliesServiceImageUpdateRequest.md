[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FamiliesServiceImageUpdateRequest

# Class: FamiliesServiceImageUpdateRequest

Describes the parameters necessary to update a family image

**`Generated`**

from message Scailo.FamiliesServiceImageUpdateRequest

## Hierarchy

- `Message`\<[`FamiliesServiceImageUpdateRequest`](FamiliesServiceImageUpdateRequest.md)\>

  ↳ **`FamiliesServiceImageUpdateRequest`**

## Table of contents

### Constructors

- [constructor](FamiliesServiceImageUpdateRequest.md#constructor)

### Properties

- [id](FamiliesServiceImageUpdateRequest.md#id)
- [isPublic](FamiliesServiceImageUpdateRequest.md#ispublic)
- [sequenceNumber](FamiliesServiceImageUpdateRequest.md#sequencenumber)
- [userComment](FamiliesServiceImageUpdateRequest.md#usercomment)
- [fields](FamiliesServiceImageUpdateRequest.md#fields)
- [runtime](FamiliesServiceImageUpdateRequest.md#runtime)
- [typeName](FamiliesServiceImageUpdateRequest.md#typename)

### Methods

- [clone](FamiliesServiceImageUpdateRequest.md#clone)
- [equals](FamiliesServiceImageUpdateRequest.md#equals)
- [fromBinary](FamiliesServiceImageUpdateRequest.md#frombinary)
- [fromJson](FamiliesServiceImageUpdateRequest.md#fromjson)
- [fromJsonString](FamiliesServiceImageUpdateRequest.md#fromjsonstring)
- [getType](FamiliesServiceImageUpdateRequest.md#gettype)
- [toBinary](FamiliesServiceImageUpdateRequest.md#tobinary)
- [toJSON](FamiliesServiceImageUpdateRequest.md#tojson)
- [toJson](FamiliesServiceImageUpdateRequest.md#tojson-1)
- [toJsonString](FamiliesServiceImageUpdateRequest.md#tojsonstring)
- [equals](FamiliesServiceImageUpdateRequest.md#equals-1)
- [fromBinary](FamiliesServiceImageUpdateRequest.md#frombinary-1)
- [fromJson](FamiliesServiceImageUpdateRequest.md#fromjson-1)
- [fromJsonString](FamiliesServiceImageUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new FamiliesServiceImageUpdateRequest**(`data?`): [`FamiliesServiceImageUpdateRequest`](FamiliesServiceImageUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FamiliesServiceImageUpdateRequest`](FamiliesServiceImageUpdateRequest.md)\> |

#### Returns

[`FamiliesServiceImageUpdateRequest`](FamiliesServiceImageUpdateRequest.md)

#### Overrides

Message\&lt;FamiliesServiceImageUpdateRequest\&gt;.constructor

#### Defined in

[src/families.scailo_pb.ts:2769](https://github.com/scailo/ts-sdk/blob/82f472649d19de288d06f4ba8d6c97f248d8e611/src/families.scailo_pb.ts#L2769)

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/families.scailo_pb.ts:2753](https://github.com/scailo/ts-sdk/blob/82f472649d19de288d06f4ba8d6c97f248d8e611/src/families.scailo_pb.ts#L2753)

___

### isPublic

• **isPublic**: `boolean` = `false`

Denotes if the image is public

**`Generated`**

from field: bool is_public = 12;

#### Defined in

[src/families.scailo_pb.ts:2760](https://github.com/scailo/ts-sdk/blob/82f472649d19de288d06f4ba8d6c97f248d8e611/src/families.scailo_pb.ts#L2760)

___

### sequenceNumber

• **sequenceNumber**: `bigint` = `protoInt64.zero`

Stores the sequence number

**`Generated`**

from field: uint64 sequence_number = 13;

#### Defined in

[src/families.scailo_pb.ts:2767](https://github.com/scailo/ts-sdk/blob/82f472649d19de288d06f4ba8d6c97f248d8e611/src/families.scailo_pb.ts#L2767)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/families.scailo_pb.ts:2746](https://github.com/scailo/ts-sdk/blob/82f472649d19de288d06f4ba8d6c97f248d8e611/src/families.scailo_pb.ts#L2746)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/families.scailo_pb.ts:2776](https://github.com/scailo/ts-sdk/blob/82f472649d19de288d06f4ba8d6c97f248d8e611/src/families.scailo_pb.ts#L2776)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/families.scailo_pb.ts:2774](https://github.com/scailo/ts-sdk/blob/82f472649d19de288d06f4ba8d6c97f248d8e611/src/families.scailo_pb.ts#L2774)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FamiliesServiceImageUpdateRequest"``

#### Defined in

[src/families.scailo_pb.ts:2775](https://github.com/scailo/ts-sdk/blob/82f472649d19de288d06f4ba8d6c97f248d8e611/src/families.scailo_pb.ts#L2775)

## Methods

### clone

▸ **clone**(): [`FamiliesServiceImageUpdateRequest`](FamiliesServiceImageUpdateRequest.md)

Create a deep copy.

#### Returns

[`FamiliesServiceImageUpdateRequest`](FamiliesServiceImageUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`FamiliesServiceImageUpdateRequest`](FamiliesServiceImageUpdateRequest.md) \| `PlainMessage`\<[`FamiliesServiceImageUpdateRequest`](FamiliesServiceImageUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`FamiliesServiceImageUpdateRequest`](FamiliesServiceImageUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FamiliesServiceImageUpdateRequest`](FamiliesServiceImageUpdateRequest.md)\>

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
| `a` | `undefined` \| [`FamiliesServiceImageUpdateRequest`](FamiliesServiceImageUpdateRequest.md) \| `PlainMessage`\<[`FamiliesServiceImageUpdateRequest`](FamiliesServiceImageUpdateRequest.md)\> |
| `b` | `undefined` \| [`FamiliesServiceImageUpdateRequest`](FamiliesServiceImageUpdateRequest.md) \| `PlainMessage`\<[`FamiliesServiceImageUpdateRequest`](FamiliesServiceImageUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/families.scailo_pb.ts:2795](https://github.com/scailo/ts-sdk/blob/82f472649d19de288d06f4ba8d6c97f248d8e611/src/families.scailo_pb.ts#L2795)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FamiliesServiceImageUpdateRequest`](FamiliesServiceImageUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FamiliesServiceImageUpdateRequest`](FamiliesServiceImageUpdateRequest.md)

#### Defined in

[src/families.scailo_pb.ts:2783](https://github.com/scailo/ts-sdk/blob/82f472649d19de288d06f4ba8d6c97f248d8e611/src/families.scailo_pb.ts#L2783)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FamiliesServiceImageUpdateRequest`](FamiliesServiceImageUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamiliesServiceImageUpdateRequest`](FamiliesServiceImageUpdateRequest.md)

#### Defined in

[src/families.scailo_pb.ts:2787](https://github.com/scailo/ts-sdk/blob/82f472649d19de288d06f4ba8d6c97f248d8e611/src/families.scailo_pb.ts#L2787)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FamiliesServiceImageUpdateRequest`](FamiliesServiceImageUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamiliesServiceImageUpdateRequest`](FamiliesServiceImageUpdateRequest.md)

#### Defined in

[src/families.scailo_pb.ts:2791](https://github.com/scailo/ts-sdk/blob/82f472649d19de288d06f4ba8d6c97f248d8e611/src/families.scailo_pb.ts#L2791)
