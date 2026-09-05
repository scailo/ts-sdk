[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AbsencesServiceUpdateRequest

# Class: AbsencesServiceUpdateRequest

Request message for updating an existing Absence record.
Only applicable for records in `DRAFT` or `REVISION` states.
This message allows for modifying the naming, leave request, start and end timestamps and quantity
of an established Absence.

**Note:** Only fields provided in the request will typically be updated.
The unique system ID is required to locate the target record.

**`Generated`**

from message Scailo.AbsencesServiceUpdateRequest

## Hierarchy

- `Message`\<[`AbsencesServiceUpdateRequest`](AbsencesServiceUpdateRequest.md)\>

  ↳ **`AbsencesServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](AbsencesServiceUpdateRequest.md#constructor)

### Properties

- [description](AbsencesServiceUpdateRequest.md#description)
- [formData](AbsencesServiceUpdateRequest.md#formdata)
- [fromTimestamp](AbsencesServiceUpdateRequest.md#fromtimestamp)
- [id](AbsencesServiceUpdateRequest.md#id)
- [leaveRequestId](AbsencesServiceUpdateRequest.md#leaverequestid)
- [notifyUsers](AbsencesServiceUpdateRequest.md#notifyusers)
- [quantity](AbsencesServiceUpdateRequest.md#quantity)
- [referenceId](AbsencesServiceUpdateRequest.md#referenceid)
- [toTimestamp](AbsencesServiceUpdateRequest.md#totimestamp)
- [userComment](AbsencesServiceUpdateRequest.md#usercomment)
- [vaultFolderId](AbsencesServiceUpdateRequest.md#vaultfolderid)
- [fields](AbsencesServiceUpdateRequest.md#fields)
- [runtime](AbsencesServiceUpdateRequest.md#runtime)
- [typeName](AbsencesServiceUpdateRequest.md#typename)

### Methods

- [clone](AbsencesServiceUpdateRequest.md#clone)
- [equals](AbsencesServiceUpdateRequest.md#equals)
- [fromBinary](AbsencesServiceUpdateRequest.md#frombinary)
- [fromJson](AbsencesServiceUpdateRequest.md#fromjson)
- [fromJsonString](AbsencesServiceUpdateRequest.md#fromjsonstring)
- [getType](AbsencesServiceUpdateRequest.md#gettype)
- [toBinary](AbsencesServiceUpdateRequest.md#tobinary)
- [toJSON](AbsencesServiceUpdateRequest.md#tojson)
- [toJson](AbsencesServiceUpdateRequest.md#tojson-1)
- [toJsonString](AbsencesServiceUpdateRequest.md#tojsonstring)
- [equals](AbsencesServiceUpdateRequest.md#equals-1)
- [fromBinary](AbsencesServiceUpdateRequest.md#frombinary-1)
- [fromJson](AbsencesServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](AbsencesServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new AbsencesServiceUpdateRequest**(`data?`): [`AbsencesServiceUpdateRequest`](AbsencesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AbsencesServiceUpdateRequest`](AbsencesServiceUpdateRequest.md)\> |

#### Returns

[`AbsencesServiceUpdateRequest`](AbsencesServiceUpdateRequest.md)

#### Overrides

Message\&lt;AbsencesServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/absences.scailo_pb.ts:550](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L550)

## Properties

### description

• `Optional` **description**: `string`

**`Optional`**

**`Description`**

Updated textual description.

**`Example`**

```ts
"Confirmed medical leave."
```

**`Regex`**

[0-9A-Za-z ]*$

@format: Alphanumeric characters and spaces only. Can be left empty.

**`Generated`**

from field: optional string description = 17;

#### Defined in

[src/absences.scailo_pb.ts:534](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L534)

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

[src/absences.scailo_pb.ts:548](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L548)

___

### fromTimestamp

• `Optional` **fromTimestamp**: `bigint`

**`Optional`**

**`Description`**

Updated start timestamp in UNIX Epoch Seconds.

**`Example`**

```ts
1698220800
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Must be a strictly positive integer (1 or greater).

**`Generated`**

from field: optional uint64 from_timestamp = 13;

#### Defined in

[src/absences.scailo_pb.ts:486](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L486)

___

### id

• **id**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique system identifier of the Absence to be modified. Must be a value greater than `0`.

**`Example`**

```ts
98765
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Must be a strictly positive integer (1 or greater).

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/absences.scailo_pb.ts:410](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L410)

___

### leaveRequestId

• `Optional` **leaveRequestId**: `bigint`

**`Optional`**

**`Description`**

Updated link to a Leave Request.

**`Example`**

```ts
553
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 leave_request_id = 12;

#### Defined in

[src/absences.scailo_pb.ts:470](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L470)

___

### notifyUsers

• `Optional` **notifyUsers**: `boolean`

**`Optional`**

**`Description`**

Flag to trigger system notifications to relevant users upon update. Set to true if subsequent workflows (like verification) depend on this change.

**`Example`**

```ts
true
```

**`Generated`**

from field: optional bool notify_users = 3;

#### Defined in

[src/absences.scailo_pb.ts:422](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L422)

___

### quantity

• `Optional` **quantity**: `bigint`

**`Optional`**

**`Description`**

Updated quantity in cents (x100).

**`Example`**

```ts
200
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Must be a strictly positive integer (1 or greater).

**`Generated`**

from field: optional uint64 quantity = 16;

#### Defined in

[src/absences.scailo_pb.ts:518](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L518)

___

### referenceId

• `Optional` **referenceId**: `string`

**`Optional`**

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

from field: optional string reference_id = 10;

#### Defined in

[src/absences.scailo_pb.ts:454](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L454)

___

### toTimestamp

• `Optional` **toTimestamp**: `bigint`

**`Optional`**

**`Description`**

Updated end timestamp in UNIX Epoch Seconds.

**`Example`**

```ts
1698393600
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Must be a strictly positive integer (1 or greater).

**`Generated`**

from field: optional uint64 to_timestamp = 14;

#### Defined in

[src/absences.scailo_pb.ts:502](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L502)

___

### userComment

• `Optional` **userComment**: `string`

**`Optional`**

**`Description`**

Audit log comment or justification for this specific update. Captured in the version history for administrative tracking.

**`Example`**

```ts
"Corrected the end date as per the medical certificate."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string user_comment = 1;

#### Defined in

[src/absences.scailo_pb.ts:394](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L394)

___

### vaultFolderId

• `Optional` **vaultFolderId**: `bigint`

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

from field: optional uint64 vault_folder_id = 9;

#### Defined in

[src/absences.scailo_pb.ts:438](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L438)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/absences.scailo_pb.ts:557](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L557)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/absences.scailo_pb.ts:555](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L555)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AbsencesServiceUpdateRequest"``

#### Defined in

[src/absences.scailo_pb.ts:556](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L556)

## Methods

### clone

▸ **clone**(): [`AbsencesServiceUpdateRequest`](AbsencesServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`AbsencesServiceUpdateRequest`](AbsencesServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`AbsencesServiceUpdateRequest`](AbsencesServiceUpdateRequest.md) \| `PlainMessage`\<[`AbsencesServiceUpdateRequest`](AbsencesServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`AbsencesServiceUpdateRequest`](AbsencesServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AbsencesServiceUpdateRequest`](AbsencesServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`AbsencesServiceUpdateRequest`](AbsencesServiceUpdateRequest.md) \| `PlainMessage`\<[`AbsencesServiceUpdateRequest`](AbsencesServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`AbsencesServiceUpdateRequest`](AbsencesServiceUpdateRequest.md) \| `PlainMessage`\<[`AbsencesServiceUpdateRequest`](AbsencesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/absences.scailo_pb.ts:583](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L583)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AbsencesServiceUpdateRequest`](AbsencesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AbsencesServiceUpdateRequest`](AbsencesServiceUpdateRequest.md)

#### Defined in

[src/absences.scailo_pb.ts:571](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L571)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AbsencesServiceUpdateRequest`](AbsencesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AbsencesServiceUpdateRequest`](AbsencesServiceUpdateRequest.md)

#### Defined in

[src/absences.scailo_pb.ts:575](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L575)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AbsencesServiceUpdateRequest`](AbsencesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AbsencesServiceUpdateRequest`](AbsencesServiceUpdateRequest.md)

#### Defined in

[src/absences.scailo_pb.ts:579](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/absences.scailo_pb.ts#L579)
