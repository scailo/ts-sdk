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

[src/production_plans.scailo_pb.ts:513](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L513)

## Properties

### endsAt

• **endsAt**: `bigint` = `protoInt64.zero`

The end UNIX timestamp

**`Generated`**

from field: uint64 ends_at = 17;

#### Defined in

[src/production_plans.scailo_pb.ts:504](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L504)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/production_plans.scailo_pb.ts:511](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L511)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/production_plans.scailo_pb.ts:432](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L432)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

**`Optional`**

**`Description`**

Flag to trigger system notifications to relevant users upon update. Set to true if subsequent workflows (like verification) depend on this change.

**`Example`**

```ts
true
```

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/production_plans.scailo_pb.ts:444](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L444)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The associated project ID

**`Generated`**

from field: uint64 project_id = 8;

#### Defined in

[src/production_plans.scailo_pb.ts:451](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L451)

___

### referenceId

• **referenceId**: `string` = `""`

**`Mandatory`**

**`Description`**

Updated alphanumeric reference ID. Must contain at least 1 character.

**`Example`**

```ts
"ABS-2023-001-REV"
```

**`Regex`**

"[0-9A-Za-z ]+$"

**`Format`**

Alphanumeric characters and spaces only. No special symbols or punctuation allowed.

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/production_plans.scailo_pb.ts:483](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L483)

___

### startsAt

• **startsAt**: `bigint` = `protoInt64.zero`

The start UNIX timestamp

**`Generated`**

from field: uint64 starts_at = 16;

#### Defined in

[src/production_plans.scailo_pb.ts:497](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L497)

___

### supervisor

• **supervisor**: `string` = `""`

The username of the supervisor

**`Generated`**

from field: string supervisor = 15;

#### Defined in

[src/production_plans.scailo_pb.ts:490](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L490)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/production_plans.scailo_pb.ts:425](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L425)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Updated vault folder ID for documentation storage.

**`Example`**

```ts
15235
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/production_plans.scailo_pb.ts:467](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L467)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/production_plans.scailo_pb.ts:520](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L520)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/production_plans.scailo_pb.ts:518](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L518)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProductionPlansServiceUpdateRequest"``

#### Defined in

[src/production_plans.scailo_pb.ts:519](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L519)

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

[src/production_plans.scailo_pb.ts:545](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L545)

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

[src/production_plans.scailo_pb.ts:533](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L533)

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

[src/production_plans.scailo_pb.ts:537](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L537)

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

[src/production_plans.scailo_pb.ts:541](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L541)
