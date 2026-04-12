[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FamiliesServiceImageCreateRequest

# Class: FamiliesServiceImageCreateRequest

Describes the parameters necessary to create a family image

**`Generated`**

from message Scailo.FamiliesServiceImageCreateRequest

## Hierarchy

- `Message`\<[`FamiliesServiceImageCreateRequest`](FamiliesServiceImageCreateRequest.md)\>

  ↳ **`FamiliesServiceImageCreateRequest`**

## Table of contents

### Constructors

- [constructor](FamiliesServiceImageCreateRequest.md#constructor)

### Properties

- [familyId](FamiliesServiceImageCreateRequest.md#familyid)
- [isPublic](FamiliesServiceImageCreateRequest.md#ispublic)
- [sequenceNumber](FamiliesServiceImageCreateRequest.md#sequencenumber)
- [userComment](FamiliesServiceImageCreateRequest.md#usercomment)
- [vaultFileId](FamiliesServiceImageCreateRequest.md#vaultfileid)
- [fields](FamiliesServiceImageCreateRequest.md#fields)
- [runtime](FamiliesServiceImageCreateRequest.md#runtime)
- [typeName](FamiliesServiceImageCreateRequest.md#typename)

### Methods

- [clone](FamiliesServiceImageCreateRequest.md#clone)
- [equals](FamiliesServiceImageCreateRequest.md#equals)
- [fromBinary](FamiliesServiceImageCreateRequest.md#frombinary)
- [fromJson](FamiliesServiceImageCreateRequest.md#fromjson)
- [fromJsonString](FamiliesServiceImageCreateRequest.md#fromjsonstring)
- [getType](FamiliesServiceImageCreateRequest.md#gettype)
- [toBinary](FamiliesServiceImageCreateRequest.md#tobinary)
- [toJSON](FamiliesServiceImageCreateRequest.md#tojson)
- [toJson](FamiliesServiceImageCreateRequest.md#tojson-1)
- [toJsonString](FamiliesServiceImageCreateRequest.md#tojsonstring)
- [equals](FamiliesServiceImageCreateRequest.md#equals-1)
- [fromBinary](FamiliesServiceImageCreateRequest.md#frombinary-1)
- [fromJson](FamiliesServiceImageCreateRequest.md#fromjson-1)
- [fromJsonString](FamiliesServiceImageCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new FamiliesServiceImageCreateRequest**(`data?`): [`FamiliesServiceImageCreateRequest`](FamiliesServiceImageCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FamiliesServiceImageCreateRequest`](FamiliesServiceImageCreateRequest.md)\> |

#### Returns

[`FamiliesServiceImageCreateRequest`](FamiliesServiceImageCreateRequest.md)

#### Overrides

Message\&lt;FamiliesServiceImageCreateRequest\&gt;.constructor

#### Defined in

[src/families.scailo_pb.ts:3116](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/families.scailo_pb.ts#L3116)

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 10;

#### Defined in

[src/families.scailo_pb.ts:3093](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/families.scailo_pb.ts#L3093)

___

### isPublic

• **isPublic**: `boolean` = `false`

Denotes if the image is public

**`Generated`**

from field: bool is_public = 12;

#### Defined in

[src/families.scailo_pb.ts:3107](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/families.scailo_pb.ts#L3107)

___

### sequenceNumber

• **sequenceNumber**: `bigint` = `protoInt64.zero`

Stores the sequence number

**`Generated`**

from field: uint64 sequence_number = 13;

#### Defined in

[src/families.scailo_pb.ts:3114](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/families.scailo_pb.ts#L3114)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/families.scailo_pb.ts:3086](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/families.scailo_pb.ts#L3086)

___

### vaultFileId

• **vaultFileId**: `bigint` = `protoInt64.zero`

Stores the vault file ID

**`Generated`**

from field: uint64 vault_file_id = 11;

#### Defined in

[src/families.scailo_pb.ts:3100](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/families.scailo_pb.ts#L3100)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/families.scailo_pb.ts:3123](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/families.scailo_pb.ts#L3123)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/families.scailo_pb.ts:3121](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/families.scailo_pb.ts#L3121)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FamiliesServiceImageCreateRequest"``

#### Defined in

[src/families.scailo_pb.ts:3122](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/families.scailo_pb.ts#L3122)

## Methods

### clone

▸ **clone**(): [`FamiliesServiceImageCreateRequest`](FamiliesServiceImageCreateRequest.md)

Create a deep copy.

#### Returns

[`FamiliesServiceImageCreateRequest`](FamiliesServiceImageCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`FamiliesServiceImageCreateRequest`](FamiliesServiceImageCreateRequest.md) \| `PlainMessage`\<[`FamiliesServiceImageCreateRequest`](FamiliesServiceImageCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`FamiliesServiceImageCreateRequest`](FamiliesServiceImageCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FamiliesServiceImageCreateRequest`](FamiliesServiceImageCreateRequest.md)\>

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
| `a` | `undefined` \| [`FamiliesServiceImageCreateRequest`](FamiliesServiceImageCreateRequest.md) \| `PlainMessage`\<[`FamiliesServiceImageCreateRequest`](FamiliesServiceImageCreateRequest.md)\> |
| `b` | `undefined` \| [`FamiliesServiceImageCreateRequest`](FamiliesServiceImageCreateRequest.md) \| `PlainMessage`\<[`FamiliesServiceImageCreateRequest`](FamiliesServiceImageCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/families.scailo_pb.ts:3143](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/families.scailo_pb.ts#L3143)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FamiliesServiceImageCreateRequest`](FamiliesServiceImageCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FamiliesServiceImageCreateRequest`](FamiliesServiceImageCreateRequest.md)

#### Defined in

[src/families.scailo_pb.ts:3131](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/families.scailo_pb.ts#L3131)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FamiliesServiceImageCreateRequest`](FamiliesServiceImageCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamiliesServiceImageCreateRequest`](FamiliesServiceImageCreateRequest.md)

#### Defined in

[src/families.scailo_pb.ts:3135](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/families.scailo_pb.ts#L3135)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FamiliesServiceImageCreateRequest`](FamiliesServiceImageCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamiliesServiceImageCreateRequest`](FamiliesServiceImageCreateRequest.md)

#### Defined in

[src/families.scailo_pb.ts:3139](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/families.scailo_pb.ts#L3139)
