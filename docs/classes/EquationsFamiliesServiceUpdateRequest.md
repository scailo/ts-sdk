[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / EquationsFamiliesServiceUpdateRequest

# Class: EquationsFamiliesServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.EquationsFamiliesServiceUpdateRequest

## Hierarchy

- `Message`\<[`EquationsFamiliesServiceUpdateRequest`](EquationsFamiliesServiceUpdateRequest.md)\>

  ↳ **`EquationsFamiliesServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](EquationsFamiliesServiceUpdateRequest.md#constructor)

### Properties

- [description](EquationsFamiliesServiceUpdateRequest.md#description)
- [id](EquationsFamiliesServiceUpdateRequest.md#id)
- [name](EquationsFamiliesServiceUpdateRequest.md#name)
- [notifyUsers](EquationsFamiliesServiceUpdateRequest.md#notifyusers)
- [userComment](EquationsFamiliesServiceUpdateRequest.md#usercomment)
- [vaultFolderId](EquationsFamiliesServiceUpdateRequest.md#vaultfolderid)
- [fields](EquationsFamiliesServiceUpdateRequest.md#fields)
- [runtime](EquationsFamiliesServiceUpdateRequest.md#runtime)
- [typeName](EquationsFamiliesServiceUpdateRequest.md#typename)

### Methods

- [clone](EquationsFamiliesServiceUpdateRequest.md#clone)
- [equals](EquationsFamiliesServiceUpdateRequest.md#equals)
- [fromBinary](EquationsFamiliesServiceUpdateRequest.md#frombinary)
- [fromJson](EquationsFamiliesServiceUpdateRequest.md#fromjson)
- [fromJsonString](EquationsFamiliesServiceUpdateRequest.md#fromjsonstring)
- [getType](EquationsFamiliesServiceUpdateRequest.md#gettype)
- [toBinary](EquationsFamiliesServiceUpdateRequest.md#tobinary)
- [toJSON](EquationsFamiliesServiceUpdateRequest.md#tojson)
- [toJson](EquationsFamiliesServiceUpdateRequest.md#tojson-1)
- [toJsonString](EquationsFamiliesServiceUpdateRequest.md#tojsonstring)
- [equals](EquationsFamiliesServiceUpdateRequest.md#equals-1)
- [fromBinary](EquationsFamiliesServiceUpdateRequest.md#frombinary-1)
- [fromJson](EquationsFamiliesServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](EquationsFamiliesServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationsFamiliesServiceUpdateRequest**(`data?`): [`EquationsFamiliesServiceUpdateRequest`](EquationsFamiliesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EquationsFamiliesServiceUpdateRequest`](EquationsFamiliesServiceUpdateRequest.md)\> |

#### Returns

[`EquationsFamiliesServiceUpdateRequest`](EquationsFamiliesServiceUpdateRequest.md)

#### Overrides

Message\&lt;EquationsFamiliesServiceUpdateRequest\&gt;.constructor

#### Defined in

src/equations_families.scailo_pb.ts:342

## Properties

### description

• **description**: `string` = `""`

The description of the equation family

**`Generated`**

from field: string description = 13;

#### Defined in

src/equations_families.scailo_pb.ts:340

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/equations_families.scailo_pb.ts:312

___

### name

• **name**: `string` = `""`

The name of the equation family

**`Generated`**

from field: string name = 10;

#### Defined in

src/equations_families.scailo_pb.ts:333

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

src/equations_families.scailo_pb.ts:319

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/equations_families.scailo_pb.ts:305

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/equations_families.scailo_pb.ts:326

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/equations_families.scailo_pb.ts:349

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/equations_families.scailo_pb.ts:347

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EquationsFamiliesServiceUpdateRequest"``

#### Defined in

src/equations_families.scailo_pb.ts:348

## Methods

### clone

▸ **clone**(): [`EquationsFamiliesServiceUpdateRequest`](EquationsFamiliesServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`EquationsFamiliesServiceUpdateRequest`](EquationsFamiliesServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationsFamiliesServiceUpdateRequest`](EquationsFamiliesServiceUpdateRequest.md) \| `PlainMessage`\<[`EquationsFamiliesServiceUpdateRequest`](EquationsFamiliesServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`EquationsFamiliesServiceUpdateRequest`](EquationsFamiliesServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EquationsFamiliesServiceUpdateRequest`](EquationsFamiliesServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`EquationsFamiliesServiceUpdateRequest`](EquationsFamiliesServiceUpdateRequest.md) \| `PlainMessage`\<[`EquationsFamiliesServiceUpdateRequest`](EquationsFamiliesServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`EquationsFamiliesServiceUpdateRequest`](EquationsFamiliesServiceUpdateRequest.md) \| `PlainMessage`\<[`EquationsFamiliesServiceUpdateRequest`](EquationsFamiliesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/equations_families.scailo_pb.ts:370

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationsFamiliesServiceUpdateRequest`](EquationsFamiliesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EquationsFamiliesServiceUpdateRequest`](EquationsFamiliesServiceUpdateRequest.md)

#### Defined in

src/equations_families.scailo_pb.ts:358

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationsFamiliesServiceUpdateRequest`](EquationsFamiliesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsFamiliesServiceUpdateRequest`](EquationsFamiliesServiceUpdateRequest.md)

#### Defined in

src/equations_families.scailo_pb.ts:362

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationsFamiliesServiceUpdateRequest`](EquationsFamiliesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsFamiliesServiceUpdateRequest`](EquationsFamiliesServiceUpdateRequest.md)

#### Defined in

src/equations_families.scailo_pb.ts:366
