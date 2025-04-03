[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProductionPlansServiceUpdateRequest

# Class: ProductionPlansServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.ProductionPlansServiceUpdateRequest

## Hierarchy

- `Message`\<[`ProductionPlansServiceUpdateRequest`](ProductionPlansServiceUpdateRequest.md)\>

  ↳ **`ProductionPlansServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](ProductionPlansServiceUpdateRequest.md#constructor)

### Properties

- [endsAt](ProductionPlansServiceUpdateRequest.md#endsat)
- [formData](ProductionPlansServiceUpdateRequest.md#formdata)
- [id](ProductionPlansServiceUpdateRequest.md#id)
- [notifyUsers](ProductionPlansServiceUpdateRequest.md#notifyusers)
- [projectId](ProductionPlansServiceUpdateRequest.md#projectid)
- [referenceId](ProductionPlansServiceUpdateRequest.md#referenceid)
- [startsAt](ProductionPlansServiceUpdateRequest.md#startsat)
- [supervisor](ProductionPlansServiceUpdateRequest.md#supervisor)
- [userComment](ProductionPlansServiceUpdateRequest.md#usercomment)
- [vaultFolderId](ProductionPlansServiceUpdateRequest.md#vaultfolderid)
- [fields](ProductionPlansServiceUpdateRequest.md#fields)
- [runtime](ProductionPlansServiceUpdateRequest.md#runtime)
- [typeName](ProductionPlansServiceUpdateRequest.md#typename)

### Methods

- [clone](ProductionPlansServiceUpdateRequest.md#clone)
- [equals](ProductionPlansServiceUpdateRequest.md#equals)
- [fromBinary](ProductionPlansServiceUpdateRequest.md#frombinary)
- [fromJson](ProductionPlansServiceUpdateRequest.md#fromjson)
- [fromJsonString](ProductionPlansServiceUpdateRequest.md#fromjsonstring)
- [getType](ProductionPlansServiceUpdateRequest.md#gettype)
- [toBinary](ProductionPlansServiceUpdateRequest.md#tobinary)
- [toJSON](ProductionPlansServiceUpdateRequest.md#tojson)
- [toJson](ProductionPlansServiceUpdateRequest.md#tojson-1)
- [toJsonString](ProductionPlansServiceUpdateRequest.md#tojsonstring)
- [equals](ProductionPlansServiceUpdateRequest.md#equals-1)
- [fromBinary](ProductionPlansServiceUpdateRequest.md#frombinary-1)
- [fromJson](ProductionPlansServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](ProductionPlansServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionPlansServiceUpdateRequest**(`data?`): [`ProductionPlansServiceUpdateRequest`](ProductionPlansServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProductionPlansServiceUpdateRequest`](ProductionPlansServiceUpdateRequest.md)\> |

#### Returns

[`ProductionPlansServiceUpdateRequest`](ProductionPlansServiceUpdateRequest.md)

#### Overrides

Message\&lt;ProductionPlansServiceUpdateRequest\&gt;.constructor

#### Defined in

src/production_plans.scailo_pb.ts:463

## Properties

### endsAt

• **endsAt**: `bigint` = `protoInt64.zero`

The end UNIX timestamp

**`Generated`**

from field: uint64 ends_at = 17;

#### Defined in

src/production_plans.scailo_pb.ts:454

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

src/production_plans.scailo_pb.ts:461

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/production_plans.scailo_pb.ts:405

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

src/production_plans.scailo_pb.ts:412

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The associated project ID

**`Generated`**

from field: uint64 project_id = 8;

#### Defined in

src/production_plans.scailo_pb.ts:419

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the production plan

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/production_plans.scailo_pb.ts:433

___

### startsAt

• **startsAt**: `bigint` = `protoInt64.zero`

The start UNIX timestamp

**`Generated`**

from field: uint64 starts_at = 16;

#### Defined in

src/production_plans.scailo_pb.ts:447

___

### supervisor

• **supervisor**: `string` = `""`

The username of the supervisor

**`Generated`**

from field: string supervisor = 15;

#### Defined in

src/production_plans.scailo_pb.ts:440

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/production_plans.scailo_pb.ts:398

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/production_plans.scailo_pb.ts:426

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/production_plans.scailo_pb.ts:470

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/production_plans.scailo_pb.ts:468

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProductionPlansServiceUpdateRequest"``

#### Defined in

src/production_plans.scailo_pb.ts:469

## Methods

### clone

▸ **clone**(): [`ProductionPlansServiceUpdateRequest`](ProductionPlansServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`ProductionPlansServiceUpdateRequest`](ProductionPlansServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionPlansServiceUpdateRequest`](ProductionPlansServiceUpdateRequest.md) \| `PlainMessage`\<[`ProductionPlansServiceUpdateRequest`](ProductionPlansServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProductionPlansServiceUpdateRequest`](ProductionPlansServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProductionPlansServiceUpdateRequest`](ProductionPlansServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`ProductionPlansServiceUpdateRequest`](ProductionPlansServiceUpdateRequest.md) \| `PlainMessage`\<[`ProductionPlansServiceUpdateRequest`](ProductionPlansServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`ProductionPlansServiceUpdateRequest`](ProductionPlansServiceUpdateRequest.md) \| `PlainMessage`\<[`ProductionPlansServiceUpdateRequest`](ProductionPlansServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/production_plans.scailo_pb.ts:495

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionPlansServiceUpdateRequest`](ProductionPlansServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProductionPlansServiceUpdateRequest`](ProductionPlansServiceUpdateRequest.md)

#### Defined in

src/production_plans.scailo_pb.ts:483

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionPlansServiceUpdateRequest`](ProductionPlansServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServiceUpdateRequest`](ProductionPlansServiceUpdateRequest.md)

#### Defined in

src/production_plans.scailo_pb.ts:487

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionPlansServiceUpdateRequest`](ProductionPlansServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServiceUpdateRequest`](ProductionPlansServiceUpdateRequest.md)

#### Defined in

src/production_plans.scailo_pb.ts:491
