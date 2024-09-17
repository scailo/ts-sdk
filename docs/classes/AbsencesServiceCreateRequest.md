[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AbsencesServiceCreateRequest

# Class: AbsencesServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.AbsencesServiceCreateRequest

## Hierarchy

- `Message`\<[`AbsencesServiceCreateRequest`](AbsencesServiceCreateRequest.md)\>

  ↳ **`AbsencesServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](AbsencesServiceCreateRequest.md#constructor)

### Properties

- [description](AbsencesServiceCreateRequest.md#description)
- [entityUuid](AbsencesServiceCreateRequest.md#entityuuid)
- [formData](AbsencesServiceCreateRequest.md#formdata)
- [fromTimestamp](AbsencesServiceCreateRequest.md#fromtimestamp)
- [leaveRequestId](AbsencesServiceCreateRequest.md#leaverequestid)
- [quantity](AbsencesServiceCreateRequest.md#quantity)
- [referenceId](AbsencesServiceCreateRequest.md#referenceid)
- [toTimestamp](AbsencesServiceCreateRequest.md#totimestamp)
- [uomId](AbsencesServiceCreateRequest.md#uomid)
- [userComment](AbsencesServiceCreateRequest.md#usercomment)
- [userId](AbsencesServiceCreateRequest.md#userid)
- [vaultFolderId](AbsencesServiceCreateRequest.md#vaultfolderid)
- [fields](AbsencesServiceCreateRequest.md#fields)
- [runtime](AbsencesServiceCreateRequest.md#runtime)
- [typeName](AbsencesServiceCreateRequest.md#typename)

### Methods

- [clone](AbsencesServiceCreateRequest.md#clone)
- [equals](AbsencesServiceCreateRequest.md#equals)
- [fromBinary](AbsencesServiceCreateRequest.md#frombinary)
- [fromJson](AbsencesServiceCreateRequest.md#fromjson)
- [fromJsonString](AbsencesServiceCreateRequest.md#fromjsonstring)
- [getType](AbsencesServiceCreateRequest.md#gettype)
- [toBinary](AbsencesServiceCreateRequest.md#tobinary)
- [toJSON](AbsencesServiceCreateRequest.md#tojson)
- [toJson](AbsencesServiceCreateRequest.md#tojson-1)
- [toJsonString](AbsencesServiceCreateRequest.md#tojsonstring)
- [equals](AbsencesServiceCreateRequest.md#equals-1)
- [fromBinary](AbsencesServiceCreateRequest.md#frombinary-1)
- [fromJson](AbsencesServiceCreateRequest.md#fromjson-1)
- [fromJsonString](AbsencesServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new AbsencesServiceCreateRequest**(`data?`): [`AbsencesServiceCreateRequest`](AbsencesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AbsencesServiceCreateRequest`](AbsencesServiceCreateRequest.md)\> |

#### Returns

[`AbsencesServiceCreateRequest`](AbsencesServiceCreateRequest.md)

#### Overrides

Message\&lt;AbsencesServiceCreateRequest\&gt;.constructor

#### Defined in

src/absences.scailo_pb.ts:217

## Properties

### description

• **description**: `string` = `""`

The description of the absence

**`Generated`**

from field: string description = 17;

#### Defined in

src/absences.scailo_pb.ts:208

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/absences.scailo_pb.ts:138

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

src/absences.scailo_pb.ts:215

___

### fromTimestamp

• **fromTimestamp**: `bigint` = `protoInt64.zero`

The UNIX timestamp from when the user is absent

**`Generated`**

from field: uint64 from_timestamp = 13;

#### Defined in

src/absences.scailo_pb.ts:180

___

### leaveRequestId

• **leaveRequestId**: `bigint` = `protoInt64.zero`

The ID of the optional associated leave request

**`Generated`**

from field: uint64 leave_request_id = 12;

#### Defined in

src/absences.scailo_pb.ts:173

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

Stores the quantity of absence (in cents)

**`Generated`**

from field: uint64 quantity = 16;

#### Defined in

src/absences.scailo_pb.ts:201

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the absence

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/absences.scailo_pb.ts:159

___

### toTimestamp

• **toTimestamp**: `bigint` = `protoInt64.zero`

The UNIX timestamp until when the user is absent

**`Generated`**

from field: uint64 to_timestamp = 14;

#### Defined in

src/absences.scailo_pb.ts:187

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

Stores the unit of material ID

**`Generated`**

from field: uint64 uom_id = 15;

#### Defined in

src/absences.scailo_pb.ts:194

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/absences.scailo_pb.ts:145

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user who has been marked as absent

**`Generated`**

from field: uint64 user_id = 11;

#### Defined in

src/absences.scailo_pb.ts:166

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/absences.scailo_pb.ts:152

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/absences.scailo_pb.ts:224

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/absences.scailo_pb.ts:222

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AbsencesServiceCreateRequest"``

#### Defined in

src/absences.scailo_pb.ts:223

## Methods

### clone

▸ **clone**(): [`AbsencesServiceCreateRequest`](AbsencesServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`AbsencesServiceCreateRequest`](AbsencesServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`AbsencesServiceCreateRequest`](AbsencesServiceCreateRequest.md) \| `PlainMessage`\<[`AbsencesServiceCreateRequest`](AbsencesServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`AbsencesServiceCreateRequest`](AbsencesServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AbsencesServiceCreateRequest`](AbsencesServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`AbsencesServiceCreateRequest`](AbsencesServiceCreateRequest.md) \| `PlainMessage`\<[`AbsencesServiceCreateRequest`](AbsencesServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`AbsencesServiceCreateRequest`](AbsencesServiceCreateRequest.md) \| `PlainMessage`\<[`AbsencesServiceCreateRequest`](AbsencesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/absences.scailo_pb.ts:251

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AbsencesServiceCreateRequest`](AbsencesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AbsencesServiceCreateRequest`](AbsencesServiceCreateRequest.md)

#### Defined in

src/absences.scailo_pb.ts:239

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AbsencesServiceCreateRequest`](AbsencesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AbsencesServiceCreateRequest`](AbsencesServiceCreateRequest.md)

#### Defined in

src/absences.scailo_pb.ts:243

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AbsencesServiceCreateRequest`](AbsencesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AbsencesServiceCreateRequest`](AbsencesServiceCreateRequest.md)

#### Defined in

src/absences.scailo_pb.ts:247
