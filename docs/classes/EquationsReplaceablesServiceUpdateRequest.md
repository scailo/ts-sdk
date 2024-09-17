[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EquationsReplaceablesServiceUpdateRequest

# Class: EquationsReplaceablesServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.EquationsReplaceablesServiceUpdateRequest

## Hierarchy

- `Message`\<[`EquationsReplaceablesServiceUpdateRequest`](EquationsReplaceablesServiceUpdateRequest.md)\>

  ↳ **`EquationsReplaceablesServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](EquationsReplaceablesServiceUpdateRequest.md#constructor)

### Properties

- [description](EquationsReplaceablesServiceUpdateRequest.md#description)
- [id](EquationsReplaceablesServiceUpdateRequest.md#id)
- [name](EquationsReplaceablesServiceUpdateRequest.md#name)
- [notifyUsers](EquationsReplaceablesServiceUpdateRequest.md#notifyusers)
- [userComment](EquationsReplaceablesServiceUpdateRequest.md#usercomment)
- [vaultFolderId](EquationsReplaceablesServiceUpdateRequest.md#vaultfolderid)
- [fields](EquationsReplaceablesServiceUpdateRequest.md#fields)
- [runtime](EquationsReplaceablesServiceUpdateRequest.md#runtime)
- [typeName](EquationsReplaceablesServiceUpdateRequest.md#typename)

### Methods

- [clone](EquationsReplaceablesServiceUpdateRequest.md#clone)
- [equals](EquationsReplaceablesServiceUpdateRequest.md#equals)
- [fromBinary](EquationsReplaceablesServiceUpdateRequest.md#frombinary)
- [fromJson](EquationsReplaceablesServiceUpdateRequest.md#fromjson)
- [fromJsonString](EquationsReplaceablesServiceUpdateRequest.md#fromjsonstring)
- [getType](EquationsReplaceablesServiceUpdateRequest.md#gettype)
- [toBinary](EquationsReplaceablesServiceUpdateRequest.md#tobinary)
- [toJSON](EquationsReplaceablesServiceUpdateRequest.md#tojson)
- [toJson](EquationsReplaceablesServiceUpdateRequest.md#tojson-1)
- [toJsonString](EquationsReplaceablesServiceUpdateRequest.md#tojsonstring)
- [equals](EquationsReplaceablesServiceUpdateRequest.md#equals-1)
- [fromBinary](EquationsReplaceablesServiceUpdateRequest.md#frombinary-1)
- [fromJson](EquationsReplaceablesServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](EquationsReplaceablesServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationsReplaceablesServiceUpdateRequest**(`data?`): [`EquationsReplaceablesServiceUpdateRequest`](EquationsReplaceablesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EquationsReplaceablesServiceUpdateRequest`](EquationsReplaceablesServiceUpdateRequest.md)\> |

#### Returns

[`EquationsReplaceablesServiceUpdateRequest`](EquationsReplaceablesServiceUpdateRequest.md)

#### Overrides

Message\&lt;EquationsReplaceablesServiceUpdateRequest\&gt;.constructor

#### Defined in

src/equations_replaceables.scailo_pb.ts:336

## Properties

### description

• **description**: `string` = `""`

The description of the equation replaceable

**`Generated`**

from field: string description = 13;

#### Defined in

src/equations_replaceables.scailo_pb.ts:334

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/equations_replaceables.scailo_pb.ts:306

___

### name

• **name**: `string` = `""`

The name of the equation replaceable

**`Generated`**

from field: string name = 10;

#### Defined in

src/equations_replaceables.scailo_pb.ts:327

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

src/equations_replaceables.scailo_pb.ts:313

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/equations_replaceables.scailo_pb.ts:299

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/equations_replaceables.scailo_pb.ts:320

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/equations_replaceables.scailo_pb.ts:343

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/equations_replaceables.scailo_pb.ts:341

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EquationsReplaceablesServiceUpdateRequest"``

#### Defined in

src/equations_replaceables.scailo_pb.ts:342

## Methods

### clone

▸ **clone**(): [`EquationsReplaceablesServiceUpdateRequest`](EquationsReplaceablesServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`EquationsReplaceablesServiceUpdateRequest`](EquationsReplaceablesServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationsReplaceablesServiceUpdateRequest`](EquationsReplaceablesServiceUpdateRequest.md) \| `PlainMessage`\<[`EquationsReplaceablesServiceUpdateRequest`](EquationsReplaceablesServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`EquationsReplaceablesServiceUpdateRequest`](EquationsReplaceablesServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EquationsReplaceablesServiceUpdateRequest`](EquationsReplaceablesServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`EquationsReplaceablesServiceUpdateRequest`](EquationsReplaceablesServiceUpdateRequest.md) \| `PlainMessage`\<[`EquationsReplaceablesServiceUpdateRequest`](EquationsReplaceablesServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`EquationsReplaceablesServiceUpdateRequest`](EquationsReplaceablesServiceUpdateRequest.md) \| `PlainMessage`\<[`EquationsReplaceablesServiceUpdateRequest`](EquationsReplaceablesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/equations_replaceables.scailo_pb.ts:364

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationsReplaceablesServiceUpdateRequest`](EquationsReplaceablesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EquationsReplaceablesServiceUpdateRequest`](EquationsReplaceablesServiceUpdateRequest.md)

#### Defined in

src/equations_replaceables.scailo_pb.ts:352

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationsReplaceablesServiceUpdateRequest`](EquationsReplaceablesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsReplaceablesServiceUpdateRequest`](EquationsReplaceablesServiceUpdateRequest.md)

#### Defined in

src/equations_replaceables.scailo_pb.ts:356

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationsReplaceablesServiceUpdateRequest`](EquationsReplaceablesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsReplaceablesServiceUpdateRequest`](EquationsReplaceablesServiceUpdateRequest.md)

#### Defined in

src/equations_replaceables.scailo_pb.ts:360
