[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AttendancesServiceUpdateRequest

# Class: AttendancesServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.AttendancesServiceUpdateRequest

## Hierarchy

- `Message`\<[`AttendancesServiceUpdateRequest`](AttendancesServiceUpdateRequest.md)\>

  ↳ **`AttendancesServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](AttendancesServiceUpdateRequest.md#constructor)

### Properties

- [description](AttendancesServiceUpdateRequest.md#description)
- [entryTimestamp](AttendancesServiceUpdateRequest.md#entrytimestamp)
- [exitTimestamp](AttendancesServiceUpdateRequest.md#exittimestamp)
- [formData](AttendancesServiceUpdateRequest.md#formdata)
- [id](AttendancesServiceUpdateRequest.md#id)
- [notifyUsers](AttendancesServiceUpdateRequest.md#notifyusers)
- [referenceId](AttendancesServiceUpdateRequest.md#referenceid)
- [userComment](AttendancesServiceUpdateRequest.md#usercomment)
- [vaultFolderId](AttendancesServiceUpdateRequest.md#vaultfolderid)
- [fields](AttendancesServiceUpdateRequest.md#fields)
- [runtime](AttendancesServiceUpdateRequest.md#runtime)
- [typeName](AttendancesServiceUpdateRequest.md#typename)

### Methods

- [clone](AttendancesServiceUpdateRequest.md#clone)
- [equals](AttendancesServiceUpdateRequest.md#equals)
- [fromBinary](AttendancesServiceUpdateRequest.md#frombinary)
- [fromJson](AttendancesServiceUpdateRequest.md#fromjson)
- [fromJsonString](AttendancesServiceUpdateRequest.md#fromjsonstring)
- [getType](AttendancesServiceUpdateRequest.md#gettype)
- [toBinary](AttendancesServiceUpdateRequest.md#tobinary)
- [toJSON](AttendancesServiceUpdateRequest.md#tojson)
- [toJson](AttendancesServiceUpdateRequest.md#tojson-1)
- [toJsonString](AttendancesServiceUpdateRequest.md#tojsonstring)
- [equals](AttendancesServiceUpdateRequest.md#equals-1)
- [fromBinary](AttendancesServiceUpdateRequest.md#frombinary-1)
- [fromJson](AttendancesServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](AttendancesServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new AttendancesServiceUpdateRequest**(`data?`): [`AttendancesServiceUpdateRequest`](AttendancesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AttendancesServiceUpdateRequest`](AttendancesServiceUpdateRequest.md)\> |

#### Returns

[`AttendancesServiceUpdateRequest`](AttendancesServiceUpdateRequest.md)

#### Overrides

Message\&lt;AttendancesServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/attendances.scailo_pb.ts:344](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances.scailo_pb.ts#L344)

## Properties

### description

• **description**: `string` = `""`

The description of the attendance

**`Generated`**

from field: string description = 14;

#### Defined in

[src/attendances.scailo_pb.ts:335](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances.scailo_pb.ts#L335)

___

### entryTimestamp

• **entryTimestamp**: `bigint` = `protoInt64.zero`

The UNIX timestamp from when the attendance begins

**`Generated`**

from field: uint64 entry_timestamp = 12;

#### Defined in

[src/attendances.scailo_pb.ts:321](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances.scailo_pb.ts#L321)

___

### exitTimestamp

• **exitTimestamp**: `bigint` = `protoInt64.zero`

The UNIX timestamp from when the attendance ends

**`Generated`**

from field: uint64 exit_timestamp = 13;

#### Defined in

[src/attendances.scailo_pb.ts:328](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances.scailo_pb.ts#L328)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/attendances.scailo_pb.ts:342](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances.scailo_pb.ts#L342)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/attendances.scailo_pb.ts:270](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances.scailo_pb.ts#L270)

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

[src/attendances.scailo_pb.ts:282](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances.scailo_pb.ts#L282)

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

[src/attendances.scailo_pb.ts:314](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances.scailo_pb.ts#L314)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/attendances.scailo_pb.ts:263](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances.scailo_pb.ts#L263)

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

[src/attendances.scailo_pb.ts:298](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances.scailo_pb.ts#L298)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/attendances.scailo_pb.ts:351](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances.scailo_pb.ts#L351)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/attendances.scailo_pb.ts:349](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances.scailo_pb.ts#L349)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AttendancesServiceUpdateRequest"``

#### Defined in

[src/attendances.scailo_pb.ts:350](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances.scailo_pb.ts#L350)

## Methods

### clone

▸ **clone**(): [`AttendancesServiceUpdateRequest`](AttendancesServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`AttendancesServiceUpdateRequest`](AttendancesServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`AttendancesServiceUpdateRequest`](AttendancesServiceUpdateRequest.md) \| `PlainMessage`\<[`AttendancesServiceUpdateRequest`](AttendancesServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`AttendancesServiceUpdateRequest`](AttendancesServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AttendancesServiceUpdateRequest`](AttendancesServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`AttendancesServiceUpdateRequest`](AttendancesServiceUpdateRequest.md) \| `PlainMessage`\<[`AttendancesServiceUpdateRequest`](AttendancesServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`AttendancesServiceUpdateRequest`](AttendancesServiceUpdateRequest.md) \| `PlainMessage`\<[`AttendancesServiceUpdateRequest`](AttendancesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/attendances.scailo_pb.ts:375](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances.scailo_pb.ts#L375)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AttendancesServiceUpdateRequest`](AttendancesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AttendancesServiceUpdateRequest`](AttendancesServiceUpdateRequest.md)

#### Defined in

[src/attendances.scailo_pb.ts:363](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances.scailo_pb.ts#L363)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AttendancesServiceUpdateRequest`](AttendancesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AttendancesServiceUpdateRequest`](AttendancesServiceUpdateRequest.md)

#### Defined in

[src/attendances.scailo_pb.ts:367](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances.scailo_pb.ts#L367)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AttendancesServiceUpdateRequest`](AttendancesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AttendancesServiceUpdateRequest`](AttendancesServiceUpdateRequest.md)

#### Defined in

[src/attendances.scailo_pb.ts:371](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/attendances.scailo_pb.ts#L371)
