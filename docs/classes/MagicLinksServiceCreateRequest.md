[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / MagicLinksServiceCreateRequest

# Class: MagicLinksServiceCreateRequest

Describes the necessary data structure during creation of a magic link

**`Generated`**

from message Scailo.MagicLinksServiceCreateRequest

## Hierarchy

- `Message`\<[`MagicLinksServiceCreateRequest`](MagicLinksServiceCreateRequest.md)\>

  ↳ **`MagicLinksServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](MagicLinksServiceCreateRequest.md#constructor)

### Properties

- [description](MagicLinksServiceCreateRequest.md#description)
- [entityUuid](MagicLinksServiceCreateRequest.md#entityuuid)
- [expiresAt](MagicLinksServiceCreateRequest.md#expiresat)
- [resourceType](MagicLinksServiceCreateRequest.md#resourcetype)
- [resourceUuid](MagicLinksServiceCreateRequest.md#resourceuuid)
- [userComment](MagicLinksServiceCreateRequest.md#usercomment)
- [fields](MagicLinksServiceCreateRequest.md#fields)
- [runtime](MagicLinksServiceCreateRequest.md#runtime)
- [typeName](MagicLinksServiceCreateRequest.md#typename)

### Methods

- [clone](MagicLinksServiceCreateRequest.md#clone)
- [equals](MagicLinksServiceCreateRequest.md#equals)
- [fromBinary](MagicLinksServiceCreateRequest.md#frombinary)
- [fromJson](MagicLinksServiceCreateRequest.md#fromjson)
- [fromJsonString](MagicLinksServiceCreateRequest.md#fromjsonstring)
- [getType](MagicLinksServiceCreateRequest.md#gettype)
- [toBinary](MagicLinksServiceCreateRequest.md#tobinary)
- [toJSON](MagicLinksServiceCreateRequest.md#tojson)
- [toJson](MagicLinksServiceCreateRequest.md#tojson-1)
- [toJsonString](MagicLinksServiceCreateRequest.md#tojsonstring)
- [equals](MagicLinksServiceCreateRequest.md#equals-1)
- [fromBinary](MagicLinksServiceCreateRequest.md#frombinary-1)
- [fromJson](MagicLinksServiceCreateRequest.md#fromjson-1)
- [fromJsonString](MagicLinksServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new MagicLinksServiceCreateRequest**(`data?`): [`MagicLinksServiceCreateRequest`](MagicLinksServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`MagicLinksServiceCreateRequest`](MagicLinksServiceCreateRequest.md)\> |

#### Returns

[`MagicLinksServiceCreateRequest`](MagicLinksServiceCreateRequest.md)

#### Overrides

Message\&lt;MagicLinksServiceCreateRequest\&gt;.constructor

#### Defined in

src/magic_links.scailo_pb.ts:743

## Properties

### description

• **description**: `string` = `""`

Stores an optional description of the magic link

**`Generated`**

from field: string description = 35;

#### Defined in

src/magic_links.scailo_pb.ts:741

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/magic_links.scailo_pb.ts:706

___

### expiresAt

• **expiresAt**: `bigint` = `protoInt64.zero`

Stores the UNIX timestamp of when the link expires. If 0, then the link never expires

**`Generated`**

from field: uint64 expires_at = 30;

#### Defined in

src/magic_links.scailo_pb.ts:734

___

### resourceType

• **resourceType**: [`MAGIC_LINK_RESOURCE_TYPE`](../enums/MAGIC_LINK_RESOURCE_TYPE.md) = `MAGIC_LINK_RESOURCE_TYPE.MAGIC_LINK_RESOURCE_TYPE_ANY_UNSPECIFIED`

The type of the resource

**`Generated`**

from field: Scailo.MAGIC_LINK_RESOURCE_TYPE resource_type = 21;

#### Defined in

src/magic_links.scailo_pb.ts:727

___

### resourceUuid

• **resourceUuid**: `string` = `""`

The UUID of the resource

**`Generated`**

from field: string resource_uuid = 10;

#### Defined in

src/magic_links.scailo_pb.ts:720

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/magic_links.scailo_pb.ts:713

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/magic_links.scailo_pb.ts:750

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/magic_links.scailo_pb.ts:748

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.MagicLinksServiceCreateRequest"``

#### Defined in

src/magic_links.scailo_pb.ts:749

## Methods

### clone

▸ **clone**(): [`MagicLinksServiceCreateRequest`](MagicLinksServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`MagicLinksServiceCreateRequest`](MagicLinksServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`MagicLinksServiceCreateRequest`](MagicLinksServiceCreateRequest.md) \| `PlainMessage`\<[`MagicLinksServiceCreateRequest`](MagicLinksServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`MagicLinksServiceCreateRequest`](MagicLinksServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`MagicLinksServiceCreateRequest`](MagicLinksServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`MagicLinksServiceCreateRequest`](MagicLinksServiceCreateRequest.md) \| `PlainMessage`\<[`MagicLinksServiceCreateRequest`](MagicLinksServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`MagicLinksServiceCreateRequest`](MagicLinksServiceCreateRequest.md) \| `PlainMessage`\<[`MagicLinksServiceCreateRequest`](MagicLinksServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/magic_links.scailo_pb.ts:771

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`MagicLinksServiceCreateRequest`](MagicLinksServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`MagicLinksServiceCreateRequest`](MagicLinksServiceCreateRequest.md)

#### Defined in

src/magic_links.scailo_pb.ts:759

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`MagicLinksServiceCreateRequest`](MagicLinksServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MagicLinksServiceCreateRequest`](MagicLinksServiceCreateRequest.md)

#### Defined in

src/magic_links.scailo_pb.ts:763

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`MagicLinksServiceCreateRequest`](MagicLinksServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MagicLinksServiceCreateRequest`](MagicLinksServiceCreateRequest.md)

#### Defined in

src/magic_links.scailo_pb.ts:767
