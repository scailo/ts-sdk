[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AbsencesServiceUpdateRequest

# Class: AbsencesServiceUpdateRequest

Describes the parameters necessary to update a record

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

src/absences.scailo_pb.ts:342

## Properties

### description

• **description**: `string` = `""`

The description of the absence

**`Generated`**

from field: string description = 17;

#### Defined in

src/absences.scailo_pb.ts:333

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

src/absences.scailo_pb.ts:340

___

### fromTimestamp

• **fromTimestamp**: `bigint` = `protoInt64.zero`

The UNIX timestamp from when the user is absent

**`Generated`**

from field: uint64 from_timestamp = 13;

#### Defined in

src/absences.scailo_pb.ts:310

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/absences.scailo_pb.ts:275

___

### leaveRequestId

• **leaveRequestId**: `bigint` = `protoInt64.zero`

The ID of the optional associated leave request

**`Generated`**

from field: uint64 leave_request_id = 12;

#### Defined in

src/absences.scailo_pb.ts:303

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

src/absences.scailo_pb.ts:282

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

// Stores the unit of material ID
uint64 uom_id = 15 [(buf.validate.field).uint64.gt = 0];
Stores the quantity of absence (in cents)

**`Generated`**

from field: uint64 quantity = 16;

#### Defined in

src/absences.scailo_pb.ts:326

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the absence

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/absences.scailo_pb.ts:296

___

### toTimestamp

• **toTimestamp**: `bigint` = `protoInt64.zero`

The UNIX timestamp until when the user is absent

**`Generated`**

from field: uint64 to_timestamp = 14;

#### Defined in

src/absences.scailo_pb.ts:317

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/absences.scailo_pb.ts:268

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/absences.scailo_pb.ts:289

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/absences.scailo_pb.ts:349

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/absences.scailo_pb.ts:347

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AbsencesServiceUpdateRequest"``

#### Defined in

src/absences.scailo_pb.ts:348

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

src/absences.scailo_pb.ts:375

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

src/absences.scailo_pb.ts:363

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

src/absences.scailo_pb.ts:367

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

src/absences.scailo_pb.ts:371
