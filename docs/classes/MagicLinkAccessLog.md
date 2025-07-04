[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / MagicLinkAccessLog

# Class: MagicLinkAccessLog

Describes the access log of each magic link

**`Generated`**

from message Scailo.MagicLinkAccessLog

## Hierarchy

- `Message`\<[`MagicLinkAccessLog`](MagicLinkAccessLog.md)\>

  ↳ **`MagicLinkAccessLog`**

## Table of contents

### Constructors

- [constructor](MagicLinkAccessLog.md#constructor)

### Properties

- [entityUuid](MagicLinkAccessLog.md#entityuuid)
- [ipAddr](MagicLinkAccessLog.md#ipaddr)
- [magicLinkUuid](MagicLinkAccessLog.md#magiclinkuuid)
- [metadata](MagicLinkAccessLog.md#metadata)
- [fields](MagicLinkAccessLog.md#fields)
- [runtime](MagicLinkAccessLog.md#runtime)
- [typeName](MagicLinkAccessLog.md#typename)

### Methods

- [clone](MagicLinkAccessLog.md#clone)
- [equals](MagicLinkAccessLog.md#equals)
- [fromBinary](MagicLinkAccessLog.md#frombinary)
- [fromJson](MagicLinkAccessLog.md#fromjson)
- [fromJsonString](MagicLinkAccessLog.md#fromjsonstring)
- [getType](MagicLinkAccessLog.md#gettype)
- [toBinary](MagicLinkAccessLog.md#tobinary)
- [toJSON](MagicLinkAccessLog.md#tojson)
- [toJson](MagicLinkAccessLog.md#tojson-1)
- [toJsonString](MagicLinkAccessLog.md#tojsonstring)
- [equals](MagicLinkAccessLog.md#equals-1)
- [fromBinary](MagicLinkAccessLog.md#frombinary-1)
- [fromJson](MagicLinkAccessLog.md#fromjson-1)
- [fromJsonString](MagicLinkAccessLog.md#fromjsonstring-1)

## Constructors

### constructor

• **new MagicLinkAccessLog**(`data?`): [`MagicLinkAccessLog`](MagicLinkAccessLog.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`MagicLinkAccessLog`](MagicLinkAccessLog.md)\> |

#### Returns

[`MagicLinkAccessLog`](MagicLinkAccessLog.md)

#### Overrides

Message\&lt;MagicLinkAccessLog\&gt;.constructor

#### Defined in

src/magic_links.scailo_pb.ts:1129

## Properties

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/magic_links.scailo_pb.ts:1106

___

### ipAddr

• **ipAddr**: `string` = `""`

Stores the IP address from where the resource was accessed

**`Generated`**

from field: string ip_addr = 13;

#### Defined in

src/magic_links.scailo_pb.ts:1127

___

### magicLinkUuid

• **magicLinkUuid**: `string` = `""`

Stores the UUID of the magic link that was accessed

**`Generated`**

from field: string magic_link_uuid = 12;

#### Defined in

src/magic_links.scailo_pb.ts:1120

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this user

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/magic_links.scailo_pb.ts:1113

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/magic_links.scailo_pb.ts:1136

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/magic_links.scailo_pb.ts:1134

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.MagicLinkAccessLog"``

#### Defined in

src/magic_links.scailo_pb.ts:1135

## Methods

### clone

▸ **clone**(): [`MagicLinkAccessLog`](MagicLinkAccessLog.md)

Create a deep copy.

#### Returns

[`MagicLinkAccessLog`](MagicLinkAccessLog.md)

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
| `other` | `undefined` \| ``null`` \| [`MagicLinkAccessLog`](MagicLinkAccessLog.md) \| `PlainMessage`\<[`MagicLinkAccessLog`](MagicLinkAccessLog.md)\> |

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

▸ **getType**(): `MessageType`\<[`MagicLinkAccessLog`](MagicLinkAccessLog.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`MagicLinkAccessLog`](MagicLinkAccessLog.md)\>

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
| `a` | `undefined` \| [`MagicLinkAccessLog`](MagicLinkAccessLog.md) \| `PlainMessage`\<[`MagicLinkAccessLog`](MagicLinkAccessLog.md)\> |
| `b` | `undefined` \| [`MagicLinkAccessLog`](MagicLinkAccessLog.md) \| `PlainMessage`\<[`MagicLinkAccessLog`](MagicLinkAccessLog.md)\> |

#### Returns

`boolean`

#### Defined in

src/magic_links.scailo_pb.ts:1155

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`MagicLinkAccessLog`](MagicLinkAccessLog.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`MagicLinkAccessLog`](MagicLinkAccessLog.md)

#### Defined in

src/magic_links.scailo_pb.ts:1143

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`MagicLinkAccessLog`](MagicLinkAccessLog.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MagicLinkAccessLog`](MagicLinkAccessLog.md)

#### Defined in

src/magic_links.scailo_pb.ts:1147

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`MagicLinkAccessLog`](MagicLinkAccessLog.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MagicLinkAccessLog`](MagicLinkAccessLog.md)

#### Defined in

src/magic_links.scailo_pb.ts:1151
