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

[src/replaceable_indents.scailo_pb.ts:316](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/replaceable_indents.scailo_pb.ts#L316)

## Properties

### description

• **description**: `string` = `""`

The description of the replaceable indent

**`Generated`**

from field: string description = 16;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:307](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/replaceable_indents.scailo_pb.ts#L307)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Optional`**

**`Description`**

The globally unique identifier for the Organization or Business Entity.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:233](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/replaceable_indents.scailo_pb.ts#L233)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 14;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:293](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/replaceable_indents.scailo_pb.ts#L293)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:314](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/replaceable_indents.scailo_pb.ts#L314)

___

### itemHash

• **itemHash**: `string` = `""`

The hash of the inventory item

**`Generated`**

from field: string item_hash = 15;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:300](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/replaceable_indents.scailo_pb.ts#L300)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 location_id = 12;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:279](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/replaceable_indents.scailo_pb.ts#L279)

___

### referenceId

• **referenceId**: `string` = `""`

**`Mandatory`**

**`Description`**

A unique external reference ID for the record. Must be alphanumeric (spaces allowed). Used for cross-referencing with external systems.

**`Example`**

```ts
"ABS-2023-001"
```

**`Regex`**

"[0-9A-Za-z ]+$"

**`Format`**

Alphanumeric characters and spaces only. No special symbols or punctuation allowed.

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:272](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/replaceable_indents.scailo_pb.ts#L272)

___

### supervisor

• **supervisor**: `string` = `""`

The username of the supervisor

**`Generated`**

from field: string supervisor = 13;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:286](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/replaceable_indents.scailo_pb.ts#L286)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:240](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/replaceable_indents.scailo_pb.ts#L240)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

The ID of the associated vault folder for storing documents. Defaults to 0 if no specific folder is assigned.

**`Example`**

```ts
15234
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:256](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/replaceable_indents.scailo_pb.ts#L256)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/replaceable_indents.scailo_pb.ts:323](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/replaceable_indents.scailo_pb.ts#L323)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/replaceable_indents.scailo_pb.ts:321](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/replaceable_indents.scailo_pb.ts#L321)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ReplaceableIndentsServiceCreateRequest"``

#### Defined in

[src/replaceable_indents.scailo_pb.ts:322](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/replaceable_indents.scailo_pb.ts#L322)

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

[src/replaceable_indents.scailo_pb.ts:348](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/replaceable_indents.scailo_pb.ts#L348)

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

[src/replaceable_indents.scailo_pb.ts:336](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/replaceable_indents.scailo_pb.ts#L336)

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

[src/replaceable_indents.scailo_pb.ts:340](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/replaceable_indents.scailo_pb.ts#L340)

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

[src/replaceable_indents.scailo_pb.ts:344](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/replaceable_indents.scailo_pb.ts#L344)
