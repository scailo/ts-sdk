[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / RolesServiceAccessCreateAndUpdateRequest

# Class: RolesServiceAccessCreateAndUpdateRequest

Describes the necessary data structure during creation/updation of a role access

**`Generated`**

from message Scailo.RolesServiceAccessCreateAndUpdateRequest

## Hierarchy

- `Message`\<[`RolesServiceAccessCreateAndUpdateRequest`](RolesServiceAccessCreateAndUpdateRequest.md)\>

  ↳ **`RolesServiceAccessCreateAndUpdateRequest`**

## Table of contents

### Constructors

- [constructor](RolesServiceAccessCreateAndUpdateRequest.md#constructor)

### Properties

- [isAccessible](RolesServiceAccessCreateAndUpdateRequest.md#isaccessible)
- [menuUid](RolesServiceAccessCreateAndUpdateRequest.md#menuuid)
- [fields](RolesServiceAccessCreateAndUpdateRequest.md#fields)
- [runtime](RolesServiceAccessCreateAndUpdateRequest.md#runtime)
- [typeName](RolesServiceAccessCreateAndUpdateRequest.md#typename)

### Methods

- [clone](RolesServiceAccessCreateAndUpdateRequest.md#clone)
- [equals](RolesServiceAccessCreateAndUpdateRequest.md#equals)
- [fromBinary](RolesServiceAccessCreateAndUpdateRequest.md#frombinary)
- [fromJson](RolesServiceAccessCreateAndUpdateRequest.md#fromjson)
- [fromJsonString](RolesServiceAccessCreateAndUpdateRequest.md#fromjsonstring)
- [getType](RolesServiceAccessCreateAndUpdateRequest.md#gettype)
- [toBinary](RolesServiceAccessCreateAndUpdateRequest.md#tobinary)
- [toJSON](RolesServiceAccessCreateAndUpdateRequest.md#tojson)
- [toJson](RolesServiceAccessCreateAndUpdateRequest.md#tojson-1)
- [toJsonString](RolesServiceAccessCreateAndUpdateRequest.md#tojsonstring)
- [equals](RolesServiceAccessCreateAndUpdateRequest.md#equals-1)
- [fromBinary](RolesServiceAccessCreateAndUpdateRequest.md#frombinary-1)
- [fromJson](RolesServiceAccessCreateAndUpdateRequest.md#fromjson-1)
- [fromJsonString](RolesServiceAccessCreateAndUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new RolesServiceAccessCreateAndUpdateRequest**(`data?`): [`RolesServiceAccessCreateAndUpdateRequest`](RolesServiceAccessCreateAndUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`RolesServiceAccessCreateAndUpdateRequest`](RolesServiceAccessCreateAndUpdateRequest.md)\> |

#### Returns

[`RolesServiceAccessCreateAndUpdateRequest`](RolesServiceAccessCreateAndUpdateRequest.md)

#### Overrides

Message\&lt;RolesServiceAccessCreateAndUpdateRequest\&gt;.constructor

#### Defined in

src/roles.scailo_pb.ts:496

## Properties

### isAccessible

• **isAccessible**: `boolean` = `false`

Denotes if the menu is accessible

**`Generated`**

from field: bool is_accessible = 12;

#### Defined in

src/roles.scailo_pb.ts:494

___

### menuUid

• **menuUid**: `string` = `""`

The menu UID (or internal code)

**`Generated`**

from field: string menu_uid = 11;

#### Defined in

src/roles.scailo_pb.ts:487

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/roles.scailo_pb.ts:503

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/roles.scailo_pb.ts:501

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.RolesServiceAccessCreateAndUpdateRequest"``

#### Defined in

src/roles.scailo_pb.ts:502

## Methods

### clone

▸ **clone**(): [`RolesServiceAccessCreateAndUpdateRequest`](RolesServiceAccessCreateAndUpdateRequest.md)

Create a deep copy.

#### Returns

[`RolesServiceAccessCreateAndUpdateRequest`](RolesServiceAccessCreateAndUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`RolesServiceAccessCreateAndUpdateRequest`](RolesServiceAccessCreateAndUpdateRequest.md) \| `PlainMessage`\<[`RolesServiceAccessCreateAndUpdateRequest`](RolesServiceAccessCreateAndUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`RolesServiceAccessCreateAndUpdateRequest`](RolesServiceAccessCreateAndUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`RolesServiceAccessCreateAndUpdateRequest`](RolesServiceAccessCreateAndUpdateRequest.md)\>

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
| `a` | `undefined` \| [`RolesServiceAccessCreateAndUpdateRequest`](RolesServiceAccessCreateAndUpdateRequest.md) \| `PlainMessage`\<[`RolesServiceAccessCreateAndUpdateRequest`](RolesServiceAccessCreateAndUpdateRequest.md)\> |
| `b` | `undefined` \| [`RolesServiceAccessCreateAndUpdateRequest`](RolesServiceAccessCreateAndUpdateRequest.md) \| `PlainMessage`\<[`RolesServiceAccessCreateAndUpdateRequest`](RolesServiceAccessCreateAndUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/roles.scailo_pb.ts:520

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`RolesServiceAccessCreateAndUpdateRequest`](RolesServiceAccessCreateAndUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`RolesServiceAccessCreateAndUpdateRequest`](RolesServiceAccessCreateAndUpdateRequest.md)

#### Defined in

src/roles.scailo_pb.ts:508

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`RolesServiceAccessCreateAndUpdateRequest`](RolesServiceAccessCreateAndUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`RolesServiceAccessCreateAndUpdateRequest`](RolesServiceAccessCreateAndUpdateRequest.md)

#### Defined in

src/roles.scailo_pb.ts:512

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`RolesServiceAccessCreateAndUpdateRequest`](RolesServiceAccessCreateAndUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`RolesServiceAccessCreateAndUpdateRequest`](RolesServiceAccessCreateAndUpdateRequest.md)

#### Defined in

src/roles.scailo_pb.ts:516
