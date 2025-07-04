[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / MagicLinksServiceCountReq

# Class: MagicLinksServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.MagicLinksServiceCountReq

## Hierarchy

- `Message`\<[`MagicLinksServiceCountReq`](MagicLinksServiceCountReq.md)\>

  ↳ **`MagicLinksServiceCountReq`**

## Table of contents

### Constructors

- [constructor](MagicLinksServiceCountReq.md#constructor)

### Properties

- [creationTimestampEnd](MagicLinksServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](MagicLinksServiceCountReq.md#creationtimestampstart)
- [entityUuid](MagicLinksServiceCountReq.md#entityuuid)
- [expiresAtEnd](MagicLinksServiceCountReq.md#expiresatend)
- [expiresAtStart](MagicLinksServiceCountReq.md#expiresatstart)
- [isActive](MagicLinksServiceCountReq.md#isactive)
- [modificationTimestampEnd](MagicLinksServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](MagicLinksServiceCountReq.md#modificationtimestampstart)
- [resourceType](MagicLinksServiceCountReq.md#resourcetype)
- [resourceUuid](MagicLinksServiceCountReq.md#resourceuuid)
- [fields](MagicLinksServiceCountReq.md#fields)
- [runtime](MagicLinksServiceCountReq.md#runtime)
- [typeName](MagicLinksServiceCountReq.md#typename)

### Methods

- [clone](MagicLinksServiceCountReq.md#clone)
- [equals](MagicLinksServiceCountReq.md#equals)
- [fromBinary](MagicLinksServiceCountReq.md#frombinary)
- [fromJson](MagicLinksServiceCountReq.md#fromjson)
- [fromJsonString](MagicLinksServiceCountReq.md#fromjsonstring)
- [getType](MagicLinksServiceCountReq.md#gettype)
- [toBinary](MagicLinksServiceCountReq.md#tobinary)
- [toJSON](MagicLinksServiceCountReq.md#tojson)
- [toJson](MagicLinksServiceCountReq.md#tojson-1)
- [toJsonString](MagicLinksServiceCountReq.md#tojsonstring)
- [equals](MagicLinksServiceCountReq.md#equals-1)
- [fromBinary](MagicLinksServiceCountReq.md#frombinary-1)
- [fromJson](MagicLinksServiceCountReq.md#fromjson-1)
- [fromJsonString](MagicLinksServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new MagicLinksServiceCountReq**(`data?`): [`MagicLinksServiceCountReq`](MagicLinksServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`MagicLinksServiceCountReq`](MagicLinksServiceCountReq.md)\> |

#### Returns

[`MagicLinksServiceCountReq`](MagicLinksServiceCountReq.md)

#### Overrides

Message\&lt;MagicLinksServiceCountReq\&gt;.constructor

#### Defined in

src/magic_links.scailo_pb.ts:893

## Properties

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/magic_links.scailo_pb.ts:842

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/magic_links.scailo_pb.ts:835

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/magic_links.scailo_pb.ts:863

___

### expiresAtEnd

• **expiresAtEnd**: `bigint` = `protoInt64.zero`

The end timestamp that needs to be considered to filter by expiry

**`Generated`**

from field: uint64 expires_at_end = 31;

#### Defined in

src/magic_links.scailo_pb.ts:891

___

### expiresAtStart

• **expiresAtStart**: `bigint` = `protoInt64.zero`

The start timestamp that needs to be considered to filter by expiry

**`Generated`**

from field: uint64 expires_at_start = 30;

#### Defined in

src/magic_links.scailo_pb.ts:884

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/magic_links.scailo_pb.ts:828

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/magic_links.scailo_pb.ts:856

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/magic_links.scailo_pb.ts:849

___

### resourceType

• **resourceType**: [`MAGIC_LINK_RESOURCE_TYPE`](../enums/MAGIC_LINK_RESOURCE_TYPE.md) = `MAGIC_LINK_RESOURCE_TYPE.MAGIC_LINK_RESOURCE_TYPE_ANY_UNSPECIFIED`

The type of the resource

**`Generated`**

from field: Scailo.MAGIC_LINK_RESOURCE_TYPE resource_type = 21;

#### Defined in

src/magic_links.scailo_pb.ts:870

___

### resourceUuid

• **resourceUuid**: `string` = `""`

The UUID of the resource

**`Generated`**

from field: string resource_uuid = 22;

#### Defined in

src/magic_links.scailo_pb.ts:877

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/magic_links.scailo_pb.ts:900

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/magic_links.scailo_pb.ts:898

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.MagicLinksServiceCountReq"``

#### Defined in

src/magic_links.scailo_pb.ts:899

## Methods

### clone

▸ **clone**(): [`MagicLinksServiceCountReq`](MagicLinksServiceCountReq.md)

Create a deep copy.

#### Returns

[`MagicLinksServiceCountReq`](MagicLinksServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`MagicLinksServiceCountReq`](MagicLinksServiceCountReq.md) \| `PlainMessage`\<[`MagicLinksServiceCountReq`](MagicLinksServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`MagicLinksServiceCountReq`](MagicLinksServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`MagicLinksServiceCountReq`](MagicLinksServiceCountReq.md)\>

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
| `a` | `undefined` \| [`MagicLinksServiceCountReq`](MagicLinksServiceCountReq.md) \| `PlainMessage`\<[`MagicLinksServiceCountReq`](MagicLinksServiceCountReq.md)\> |
| `b` | `undefined` \| [`MagicLinksServiceCountReq`](MagicLinksServiceCountReq.md) \| `PlainMessage`\<[`MagicLinksServiceCountReq`](MagicLinksServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/magic_links.scailo_pb.ts:925

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`MagicLinksServiceCountReq`](MagicLinksServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`MagicLinksServiceCountReq`](MagicLinksServiceCountReq.md)

#### Defined in

src/magic_links.scailo_pb.ts:913

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`MagicLinksServiceCountReq`](MagicLinksServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MagicLinksServiceCountReq`](MagicLinksServiceCountReq.md)

#### Defined in

src/magic_links.scailo_pb.ts:917

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`MagicLinksServiceCountReq`](MagicLinksServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MagicLinksServiceCountReq`](MagicLinksServiceCountReq.md)

#### Defined in

src/magic_links.scailo_pb.ts:921
