[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / MagicLink

# Class: MagicLink

Describes the data structure of each magic link on the platform

**`Generated`**

from message Scailo.MagicLink

## Hierarchy

- `Message`\<[`MagicLink`](MagicLink.md)\>

  ↳ **`MagicLink`**

## Table of contents

### Constructors

- [constructor](MagicLink.md#constructor)

### Properties

- [code](MagicLink.md#code)
- [description](MagicLink.md#description)
- [entityUuid](MagicLink.md#entityuuid)
- [expiresAt](MagicLink.md#expiresat)
- [metadata](MagicLink.md#metadata)
- [resourceType](MagicLink.md#resourcetype)
- [resourceUuid](MagicLink.md#resourceuuid)
- [url](MagicLink.md#url)
- [fields](MagicLink.md#fields)
- [runtime](MagicLink.md#runtime)
- [typeName](MagicLink.md#typename)

### Methods

- [clone](MagicLink.md#clone)
- [equals](MagicLink.md#equals)
- [fromBinary](MagicLink.md#frombinary)
- [fromJson](MagicLink.md#fromjson)
- [fromJsonString](MagicLink.md#fromjsonstring)
- [getType](MagicLink.md#gettype)
- [toBinary](MagicLink.md#tobinary)
- [toJSON](MagicLink.md#tojson)
- [toJson](MagicLink.md#tojson-1)
- [toJsonString](MagicLink.md#tojsonstring)
- [equals](MagicLink.md#equals-1)
- [fromBinary](MagicLink.md#frombinary-1)
- [fromJson](MagicLink.md#fromjson-1)
- [fromJsonString](MagicLink.md#fromjsonstring-1)

## Constructors

### constructor

• **new MagicLink**(`data?`): [`MagicLink`](MagicLink.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`MagicLink`](MagicLink.md)\> |

#### Returns

[`MagicLink`](MagicLink.md)

#### Overrides

Message\&lt;MagicLink\&gt;.constructor

#### Defined in

src/magic_links.scailo_pb.ts:239

## Properties

### code

• **code**: `string` = `""`

Stores the code of the magic link that can be used to uniquely identify the magic link. This code will be used in the associated links, and will be used to uniquely identify the resource.

**`Generated`**

from field: string code = 40;

#### Defined in

src/magic_links.scailo_pb.ts:230

___

### description

• **description**: `string` = `""`

Stores an optional description of the magic link

**`Generated`**

from field: string description = 35;

#### Defined in

src/magic_links.scailo_pb.ts:223

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/magic_links.scailo_pb.ts:188

___

### expiresAt

• **expiresAt**: `bigint` = `protoInt64.zero`

Stores the UNIX timestamp of when the link expires. If 0, then the link never expires

**`Generated`**

from field: uint64 expires_at = 30;

#### Defined in

src/magic_links.scailo_pb.ts:216

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this resource

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/magic_links.scailo_pb.ts:195

___

### resourceType

• **resourceType**: [`MAGIC_LINK_RESOURCE_TYPE`](../enums/MAGIC_LINK_RESOURCE_TYPE.md) = `MAGIC_LINK_RESOURCE_TYPE.MAGIC_LINK_RESOURCE_TYPE_ANY_UNSPECIFIED`

The type of the resource

**`Generated`**

from field: Scailo.MAGIC_LINK_RESOURCE_TYPE resource_type = 21;

#### Defined in

src/magic_links.scailo_pb.ts:209

___

### resourceUuid

• **resourceUuid**: `string` = `""`

The UUID of the resource

**`Generated`**

from field: string resource_uuid = 10;

#### Defined in

src/magic_links.scailo_pb.ts:202

___

### url

• **url**: `string` = `""`

Stores the generated URL of the magic link

**`Generated`**

from field: string url = 100;

#### Defined in

src/magic_links.scailo_pb.ts:237

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/magic_links.scailo_pb.ts:246

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/magic_links.scailo_pb.ts:244

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.MagicLink"``

#### Defined in

src/magic_links.scailo_pb.ts:245

## Methods

### clone

▸ **clone**(): [`MagicLink`](MagicLink.md)

Create a deep copy.

#### Returns

[`MagicLink`](MagicLink.md)

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
| `other` | `undefined` \| ``null`` \| [`MagicLink`](MagicLink.md) \| `PlainMessage`\<[`MagicLink`](MagicLink.md)\> |

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

▸ **getType**(): `MessageType`\<[`MagicLink`](MagicLink.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`MagicLink`](MagicLink.md)\>

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
| `a` | `undefined` \| [`MagicLink`](MagicLink.md) \| `PlainMessage`\<[`MagicLink`](MagicLink.md)\> |
| `b` | `undefined` \| [`MagicLink`](MagicLink.md) \| `PlainMessage`\<[`MagicLink`](MagicLink.md)\> |

#### Returns

`boolean`

#### Defined in

src/magic_links.scailo_pb.ts:269

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`MagicLink`](MagicLink.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`MagicLink`](MagicLink.md)

#### Defined in

src/magic_links.scailo_pb.ts:257

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`MagicLink`](MagicLink.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MagicLink`](MagicLink.md)

#### Defined in

src/magic_links.scailo_pb.ts:261

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`MagicLink`](MagicLink.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MagicLink`](MagicLink.md)

#### Defined in

src/magic_links.scailo_pb.ts:265
