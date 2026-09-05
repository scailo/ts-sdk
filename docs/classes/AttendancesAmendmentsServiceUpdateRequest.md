[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AttendancesAmendmentsServiceUpdateRequest

# Class: AttendancesAmendmentsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.AttendancesAmendmentsServiceUpdateRequest

## Hierarchy

- `Message`\<[`AttendancesAmendmentsServiceUpdateRequest`](AttendancesAmendmentsServiceUpdateRequest.md)\>

  ↳ **`AttendancesAmendmentsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](AttendancesAmendmentsServiceUpdateRequest.md#constructor)

### Properties

- [amendmentEntryTimestamp](AttendancesAmendmentsServiceUpdateRequest.md#amendmententrytimestamp)
- [amendmentExitTimestamp](AttendancesAmendmentsServiceUpdateRequest.md#amendmentexittimestamp)
- [description](AttendancesAmendmentsServiceUpdateRequest.md#description)
- [formData](AttendancesAmendmentsServiceUpdateRequest.md#formdata)
- [id](AttendancesAmendmentsServiceUpdateRequest.md#id)
- [notifyUsers](AttendancesAmendmentsServiceUpdateRequest.md#notifyusers)
- [referenceId](AttendancesAmendmentsServiceUpdateRequest.md#referenceid)
- [userComment](AttendancesAmendmentsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](AttendancesAmendmentsServiceUpdateRequest.md#vaultfolderid)
- [fields](AttendancesAmendmentsServiceUpdateRequest.md#fields)
- [runtime](AttendancesAmendmentsServiceUpdateRequest.md#runtime)
- [typeName](AttendancesAmendmentsServiceUpdateRequest.md#typename)

### Methods

- [clone](AttendancesAmendmentsServiceUpdateRequest.md#clone)
- [equals](AttendancesAmendmentsServiceUpdateRequest.md#equals)
- [fromBinary](AttendancesAmendmentsServiceUpdateRequest.md#frombinary)
- [fromJson](AttendancesAmendmentsServiceUpdateRequest.md#fromjson)
- [fromJsonString](AttendancesAmendmentsServiceUpdateRequest.md#fromjsonstring)
- [getType](AttendancesAmendmentsServiceUpdateRequest.md#gettype)
- [toBinary](AttendancesAmendmentsServiceUpdateRequest.md#tobinary)
- [toJSON](AttendancesAmendmentsServiceUpdateRequest.md#tojson)
- [toJson](AttendancesAmendmentsServiceUpdateRequest.md#tojson-1)
- [toJsonString](AttendancesAmendmentsServiceUpdateRequest.md#tojsonstring)
- [equals](AttendancesAmendmentsServiceUpdateRequest.md#equals-1)
- [fromBinary](AttendancesAmendmentsServiceUpdateRequest.md#frombinary-1)
- [fromJson](AttendancesAmendmentsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](AttendancesAmendmentsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new AttendancesAmendmentsServiceUpdateRequest**(`data?`): [`AttendancesAmendmentsServiceUpdateRequest`](AttendancesAmendmentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AttendancesAmendmentsServiceUpdateRequest`](AttendancesAmendmentsServiceUpdateRequest.md)\> |

#### Returns

[`AttendancesAmendmentsServiceUpdateRequest`](AttendancesAmendmentsServiceUpdateRequest.md)

#### Overrides

Message\&lt;AttendancesAmendmentsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/attendances_amendments.scailo_pb.ts:409](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/attendances_amendments.scailo_pb.ts#L409)

## Properties

### amendmentEntryTimestamp

• **amendmentEntryTimestamp**: `bigint` = `protoInt64.zero`

The amended entry timestamp

**`Generated`**

from field: uint64 amendment_entry_timestamp = 12;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:379](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/attendances_amendments.scailo_pb.ts#L379)

___

### amendmentExitTimestamp

• **amendmentExitTimestamp**: `bigint` = `protoInt64.zero`

The amended exit timestamp

**`Generated`**

from field: uint64 amendment_exit_timestamp = 13;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:386](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/attendances_amendments.scailo_pb.ts#L386)

___

### description

• **description**: `string` = `""`

The description of the attendance amendment

**`Generated`**

from field: string description = 14;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:393](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/attendances_amendments.scailo_pb.ts#L393)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

**`Optional`**

**`Description`**

A collection of dynamic form fields for organization-specific data.

**`Example`**

```ts
[]
```

**`Format`**

An array/list of FormFieldDatumCreateRequest entries. Can be left empty if no custom attributes are needed.

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:407](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/attendances_amendments.scailo_pb.ts#L407)

___

### id

• **id**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the target record that needs to be updated.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:328](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/attendances_amendments.scailo_pb.ts#L328)

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

[src/attendances_amendments.scailo_pb.ts:340](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/attendances_amendments.scailo_pb.ts#L340)

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

[src/attendances_amendments.scailo_pb.ts:372](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/attendances_amendments.scailo_pb.ts#L372)

___

### userComment

• **userComment**: `string` = `""`

**`Optional`**

**`Description`**

Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.

**`Example`**

```ts
"This is a comment for audit purposes."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:312](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/attendances_amendments.scailo_pb.ts#L312)

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

[src/attendances_amendments.scailo_pb.ts:356](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/attendances_amendments.scailo_pb.ts#L356)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/attendances_amendments.scailo_pb.ts:416](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/attendances_amendments.scailo_pb.ts#L416)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/attendances_amendments.scailo_pb.ts:414](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/attendances_amendments.scailo_pb.ts#L414)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AttendancesAmendmentsServiceUpdateRequest"``

#### Defined in

[src/attendances_amendments.scailo_pb.ts:415](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/attendances_amendments.scailo_pb.ts#L415)

## Methods

### clone

▸ **clone**(): [`AttendancesAmendmentsServiceUpdateRequest`](AttendancesAmendmentsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`AttendancesAmendmentsServiceUpdateRequest`](AttendancesAmendmentsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`AttendancesAmendmentsServiceUpdateRequest`](AttendancesAmendmentsServiceUpdateRequest.md) \| `PlainMessage`\<[`AttendancesAmendmentsServiceUpdateRequest`](AttendancesAmendmentsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`AttendancesAmendmentsServiceUpdateRequest`](AttendancesAmendmentsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AttendancesAmendmentsServiceUpdateRequest`](AttendancesAmendmentsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`AttendancesAmendmentsServiceUpdateRequest`](AttendancesAmendmentsServiceUpdateRequest.md) \| `PlainMessage`\<[`AttendancesAmendmentsServiceUpdateRequest`](AttendancesAmendmentsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`AttendancesAmendmentsServiceUpdateRequest`](AttendancesAmendmentsServiceUpdateRequest.md) \| `PlainMessage`\<[`AttendancesAmendmentsServiceUpdateRequest`](AttendancesAmendmentsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/attendances_amendments.scailo_pb.ts:440](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/attendances_amendments.scailo_pb.ts#L440)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AttendancesAmendmentsServiceUpdateRequest`](AttendancesAmendmentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AttendancesAmendmentsServiceUpdateRequest`](AttendancesAmendmentsServiceUpdateRequest.md)

#### Defined in

[src/attendances_amendments.scailo_pb.ts:428](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/attendances_amendments.scailo_pb.ts#L428)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AttendancesAmendmentsServiceUpdateRequest`](AttendancesAmendmentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AttendancesAmendmentsServiceUpdateRequest`](AttendancesAmendmentsServiceUpdateRequest.md)

#### Defined in

[src/attendances_amendments.scailo_pb.ts:432](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/attendances_amendments.scailo_pb.ts#L432)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AttendancesAmendmentsServiceUpdateRequest`](AttendancesAmendmentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AttendancesAmendmentsServiceUpdateRequest`](AttendancesAmendmentsServiceUpdateRequest.md)

#### Defined in

[src/attendances_amendments.scailo_pb.ts:436](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/attendances_amendments.scailo_pb.ts#L436)
