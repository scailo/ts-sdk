[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ReplaceableIndentsServiceCreateRequest

# Class: ReplaceableIndentsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.ReplaceableIndentsServiceCreateRequest

## Hierarchy

- `Message`\<[`ReplaceableIndentsServiceCreateRequest`](ReplaceableIndentsServiceCreateRequest.md)\>

  ↳ **`ReplaceableIndentsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](ReplaceableIndentsServiceCreateRequest.md#constructor)

### Properties

- [description](ReplaceableIndentsServiceCreateRequest.md#description)
- [entityUuid](ReplaceableIndentsServiceCreateRequest.md#entityuuid)
- [familyId](ReplaceableIndentsServiceCreateRequest.md#familyid)
- [formData](ReplaceableIndentsServiceCreateRequest.md#formdata)
- [itemHash](ReplaceableIndentsServiceCreateRequest.md#itemhash)
- [locationId](ReplaceableIndentsServiceCreateRequest.md#locationid)
- [referenceId](ReplaceableIndentsServiceCreateRequest.md#referenceid)
- [supervisor](ReplaceableIndentsServiceCreateRequest.md#supervisor)
- [userComment](ReplaceableIndentsServiceCreateRequest.md#usercomment)
- [vaultFolderId](ReplaceableIndentsServiceCreateRequest.md#vaultfolderid)
- [fields](ReplaceableIndentsServiceCreateRequest.md#fields)
- [runtime](ReplaceableIndentsServiceCreateRequest.md#runtime)
- [typeName](ReplaceableIndentsServiceCreateRequest.md#typename)

### Methods

- [clone](ReplaceableIndentsServiceCreateRequest.md#clone)
- [equals](ReplaceableIndentsServiceCreateRequest.md#equals)
- [fromBinary](ReplaceableIndentsServiceCreateRequest.md#frombinary)
- [fromJson](ReplaceableIndentsServiceCreateRequest.md#fromjson)
- [fromJsonString](ReplaceableIndentsServiceCreateRequest.md#fromjsonstring)
- [getType](ReplaceableIndentsServiceCreateRequest.md#gettype)
- [toBinary](ReplaceableIndentsServiceCreateRequest.md#tobinary)
- [toJSON](ReplaceableIndentsServiceCreateRequest.md#tojson)
- [toJson](ReplaceableIndentsServiceCreateRequest.md#tojson-1)
- [toJsonString](ReplaceableIndentsServiceCreateRequest.md#tojsonstring)
- [equals](ReplaceableIndentsServiceCreateRequest.md#equals-1)
- [fromBinary](ReplaceableIndentsServiceCreateRequest.md#frombinary-1)
- [fromJson](ReplaceableIndentsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](ReplaceableIndentsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ReplaceableIndentsServiceCreateRequest**(`data?`): [`ReplaceableIndentsServiceCreateRequest`](ReplaceableIndentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ReplaceableIndentsServiceCreateRequest`](ReplaceableIndentsServiceCreateRequest.md)\> |

#### Returns

[`ReplaceableIndentsServiceCreateRequest`](ReplaceableIndentsServiceCreateRequest.md)

#### Overrides

Message\&lt;ReplaceableIndentsServiceCreateRequest\&gt;.constructor

#### Defined in

src/replaceable_indents.scailo_pb.ts:289

## Properties

### description

• **description**: `string` = `""`

The description of the replaceable indent

**`Generated`**

from field: string description = 16;

#### Defined in

src/replaceable_indents.scailo_pb.ts:280

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/replaceable_indents.scailo_pb.ts:224

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 14;

#### Defined in

src/replaceable_indents.scailo_pb.ts:266

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

src/replaceable_indents.scailo_pb.ts:287

___

### itemHash

• **itemHash**: `string` = `""`

The hash of the inventory item

**`Generated`**

from field: string item_hash = 15;

#### Defined in

src/replaceable_indents.scailo_pb.ts:273

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 location_id = 12;

#### Defined in

src/replaceable_indents.scailo_pb.ts:252

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the replaceable indent

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/replaceable_indents.scailo_pb.ts:245

___

### supervisor

• **supervisor**: `string` = `""`

The username of the supervisor

**`Generated`**

from field: string supervisor = 13;

#### Defined in

src/replaceable_indents.scailo_pb.ts:259

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/replaceable_indents.scailo_pb.ts:231

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/replaceable_indents.scailo_pb.ts:238

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/replaceable_indents.scailo_pb.ts:296

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/replaceable_indents.scailo_pb.ts:294

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ReplaceableIndentsServiceCreateRequest"``

#### Defined in

src/replaceable_indents.scailo_pb.ts:295

## Methods

### clone

▸ **clone**(): [`ReplaceableIndentsServiceCreateRequest`](ReplaceableIndentsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`ReplaceableIndentsServiceCreateRequest`](ReplaceableIndentsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ReplaceableIndentsServiceCreateRequest`](ReplaceableIndentsServiceCreateRequest.md) \| `PlainMessage`\<[`ReplaceableIndentsServiceCreateRequest`](ReplaceableIndentsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ReplaceableIndentsServiceCreateRequest`](ReplaceableIndentsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ReplaceableIndentsServiceCreateRequest`](ReplaceableIndentsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`ReplaceableIndentsServiceCreateRequest`](ReplaceableIndentsServiceCreateRequest.md) \| `PlainMessage`\<[`ReplaceableIndentsServiceCreateRequest`](ReplaceableIndentsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`ReplaceableIndentsServiceCreateRequest`](ReplaceableIndentsServiceCreateRequest.md) \| `PlainMessage`\<[`ReplaceableIndentsServiceCreateRequest`](ReplaceableIndentsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/replaceable_indents.scailo_pb.ts:321

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ReplaceableIndentsServiceCreateRequest`](ReplaceableIndentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceCreateRequest`](ReplaceableIndentsServiceCreateRequest.md)

#### Defined in

src/replaceable_indents.scailo_pb.ts:309

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ReplaceableIndentsServiceCreateRequest`](ReplaceableIndentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceCreateRequest`](ReplaceableIndentsServiceCreateRequest.md)

#### Defined in

src/replaceable_indents.scailo_pb.ts:313

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ReplaceableIndentsServiceCreateRequest`](ReplaceableIndentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceCreateRequest`](ReplaceableIndentsServiceCreateRequest.md)

#### Defined in

src/replaceable_indents.scailo_pb.ts:317
