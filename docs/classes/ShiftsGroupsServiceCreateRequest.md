[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ShiftsGroupsServiceCreateRequest

# Class: ShiftsGroupsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.ShiftsGroupsServiceCreateRequest

## Hierarchy

- `Message`\<[`ShiftsGroupsServiceCreateRequest`](ShiftsGroupsServiceCreateRequest.md)\>

  ↳ **`ShiftsGroupsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](ShiftsGroupsServiceCreateRequest.md#constructor)

### Properties

- [code](ShiftsGroupsServiceCreateRequest.md#code)
- [description](ShiftsGroupsServiceCreateRequest.md#description)
- [entityUuid](ShiftsGroupsServiceCreateRequest.md#entityuuid)
- [name](ShiftsGroupsServiceCreateRequest.md#name)
- [userComment](ShiftsGroupsServiceCreateRequest.md#usercomment)
- [vaultFolderId](ShiftsGroupsServiceCreateRequest.md#vaultfolderid)
- [fields](ShiftsGroupsServiceCreateRequest.md#fields)
- [runtime](ShiftsGroupsServiceCreateRequest.md#runtime)
- [typeName](ShiftsGroupsServiceCreateRequest.md#typename)

### Methods

- [clone](ShiftsGroupsServiceCreateRequest.md#clone)
- [equals](ShiftsGroupsServiceCreateRequest.md#equals)
- [fromBinary](ShiftsGroupsServiceCreateRequest.md#frombinary)
- [fromJson](ShiftsGroupsServiceCreateRequest.md#fromjson)
- [fromJsonString](ShiftsGroupsServiceCreateRequest.md#fromjsonstring)
- [getType](ShiftsGroupsServiceCreateRequest.md#gettype)
- [toBinary](ShiftsGroupsServiceCreateRequest.md#tobinary)
- [toJSON](ShiftsGroupsServiceCreateRequest.md#tojson)
- [toJson](ShiftsGroupsServiceCreateRequest.md#tojson-1)
- [toJsonString](ShiftsGroupsServiceCreateRequest.md#tojsonstring)
- [equals](ShiftsGroupsServiceCreateRequest.md#equals-1)
- [fromBinary](ShiftsGroupsServiceCreateRequest.md#frombinary-1)
- [fromJson](ShiftsGroupsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](ShiftsGroupsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ShiftsGroupsServiceCreateRequest**(`data?`): [`ShiftsGroupsServiceCreateRequest`](ShiftsGroupsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ShiftsGroupsServiceCreateRequest`](ShiftsGroupsServiceCreateRequest.md)\> |

#### Returns

[`ShiftsGroupsServiceCreateRequest`](ShiftsGroupsServiceCreateRequest.md)

#### Overrides

Message\&lt;ShiftsGroupsServiceCreateRequest\&gt;.constructor

#### Defined in

src/shifts_groups.scailo_pb.ts:148

## Properties

### code

• **code**: `string` = `""`

The shift group code

**`Generated`**

from field: string code = 11;

#### Defined in

src/shifts_groups.scailo_pb.ts:139

___

### description

• **description**: `string` = `""`

The description of the shift group

**`Generated`**

from field: string description = 12;

#### Defined in

src/shifts_groups.scailo_pb.ts:146

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/shifts_groups.scailo_pb.ts:111

___

### name

• **name**: `string` = `""`

The name of the shift group

**`Generated`**

from field: string name = 10;

#### Defined in

src/shifts_groups.scailo_pb.ts:132

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/shifts_groups.scailo_pb.ts:118

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/shifts_groups.scailo_pb.ts:125

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/shifts_groups.scailo_pb.ts:155

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/shifts_groups.scailo_pb.ts:153

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ShiftsGroupsServiceCreateRequest"``

#### Defined in

src/shifts_groups.scailo_pb.ts:154

## Methods

### clone

▸ **clone**(): [`ShiftsGroupsServiceCreateRequest`](ShiftsGroupsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`ShiftsGroupsServiceCreateRequest`](ShiftsGroupsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ShiftsGroupsServiceCreateRequest`](ShiftsGroupsServiceCreateRequest.md) \| `PlainMessage`\<[`ShiftsGroupsServiceCreateRequest`](ShiftsGroupsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ShiftsGroupsServiceCreateRequest`](ShiftsGroupsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ShiftsGroupsServiceCreateRequest`](ShiftsGroupsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`ShiftsGroupsServiceCreateRequest`](ShiftsGroupsServiceCreateRequest.md) \| `PlainMessage`\<[`ShiftsGroupsServiceCreateRequest`](ShiftsGroupsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`ShiftsGroupsServiceCreateRequest`](ShiftsGroupsServiceCreateRequest.md) \| `PlainMessage`\<[`ShiftsGroupsServiceCreateRequest`](ShiftsGroupsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/shifts_groups.scailo_pb.ts:176

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ShiftsGroupsServiceCreateRequest`](ShiftsGroupsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ShiftsGroupsServiceCreateRequest`](ShiftsGroupsServiceCreateRequest.md)

#### Defined in

src/shifts_groups.scailo_pb.ts:164

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ShiftsGroupsServiceCreateRequest`](ShiftsGroupsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ShiftsGroupsServiceCreateRequest`](ShiftsGroupsServiceCreateRequest.md)

#### Defined in

src/shifts_groups.scailo_pb.ts:168

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ShiftsGroupsServiceCreateRequest`](ShiftsGroupsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ShiftsGroupsServiceCreateRequest`](ShiftsGroupsServiceCreateRequest.md)

#### Defined in

src/shifts_groups.scailo_pb.ts:172
