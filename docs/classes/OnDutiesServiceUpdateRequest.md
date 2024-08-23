[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / OnDutiesServiceUpdateRequest

# Class: OnDutiesServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.OnDutiesServiceUpdateRequest

## Hierarchy

- `Message`\<[`OnDutiesServiceUpdateRequest`](OnDutiesServiceUpdateRequest.md)\>

  ↳ **`OnDutiesServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](OnDutiesServiceUpdateRequest.md#constructor)

### Properties

- [description](OnDutiesServiceUpdateRequest.md#description)
- [entryTimestamp](OnDutiesServiceUpdateRequest.md#entrytimestamp)
- [exitTimestamp](OnDutiesServiceUpdateRequest.md#exittimestamp)
- [formData](OnDutiesServiceUpdateRequest.md#formdata)
- [id](OnDutiesServiceUpdateRequest.md#id)
- [notifyUsers](OnDutiesServiceUpdateRequest.md#notifyusers)
- [referenceId](OnDutiesServiceUpdateRequest.md#referenceid)
- [userComment](OnDutiesServiceUpdateRequest.md#usercomment)
- [vaultFolderId](OnDutiesServiceUpdateRequest.md#vaultfolderid)
- [fields](OnDutiesServiceUpdateRequest.md#fields)
- [runtime](OnDutiesServiceUpdateRequest.md#runtime)
- [typeName](OnDutiesServiceUpdateRequest.md#typename)

### Methods

- [clone](OnDutiesServiceUpdateRequest.md#clone)
- [equals](OnDutiesServiceUpdateRequest.md#equals)
- [fromBinary](OnDutiesServiceUpdateRequest.md#frombinary)
- [fromJson](OnDutiesServiceUpdateRequest.md#fromjson)
- [fromJsonString](OnDutiesServiceUpdateRequest.md#fromjsonstring)
- [getType](OnDutiesServiceUpdateRequest.md#gettype)
- [toBinary](OnDutiesServiceUpdateRequest.md#tobinary)
- [toJSON](OnDutiesServiceUpdateRequest.md#tojson)
- [toJson](OnDutiesServiceUpdateRequest.md#tojson-1)
- [toJsonString](OnDutiesServiceUpdateRequest.md#tojsonstring)
- [equals](OnDutiesServiceUpdateRequest.md#equals-1)
- [fromBinary](OnDutiesServiceUpdateRequest.md#frombinary-1)
- [fromJson](OnDutiesServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](OnDutiesServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new OnDutiesServiceUpdateRequest**(`data?`): [`OnDutiesServiceUpdateRequest`](OnDutiesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OnDutiesServiceUpdateRequest`](OnDutiesServiceUpdateRequest.md)\> |

#### Returns

[`OnDutiesServiceUpdateRequest`](OnDutiesServiceUpdateRequest.md)

#### Overrides

Message\&lt;OnDutiesServiceUpdateRequest\&gt;.constructor

#### Defined in

src/on_duties.scailo_pb.ts:294

## Properties

### description

• **description**: `string` = `""`

The description of the onduty

**`Generated`**

from field: string description = 14;

#### Defined in

src/on_duties.scailo_pb.ts:285

___

### entryTimestamp

• **entryTimestamp**: `bigint` = `protoInt64.zero`

The UNIX timestamp from when the onduty begins

**`Generated`**

from field: uint64 entry_timestamp = 12;

#### Defined in

src/on_duties.scailo_pb.ts:271

___

### exitTimestamp

• **exitTimestamp**: `bigint` = `protoInt64.zero`

The UNIX timestamp from when the onduty ends

**`Generated`**

from field: uint64 exit_timestamp = 13;

#### Defined in

src/on_duties.scailo_pb.ts:278

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

src/on_duties.scailo_pb.ts:292

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/on_duties.scailo_pb.ts:243

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

src/on_duties.scailo_pb.ts:250

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the onduty

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/on_duties.scailo_pb.ts:264

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/on_duties.scailo_pb.ts:236

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/on_duties.scailo_pb.ts:257

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/on_duties.scailo_pb.ts:301

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/on_duties.scailo_pb.ts:299

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OnDutiesServiceUpdateRequest"``

#### Defined in

src/on_duties.scailo_pb.ts:300

## Methods

### clone

▸ **clone**(): [`OnDutiesServiceUpdateRequest`](OnDutiesServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`OnDutiesServiceUpdateRequest`](OnDutiesServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`OnDutiesServiceUpdateRequest`](OnDutiesServiceUpdateRequest.md) \| `PlainMessage`\<[`OnDutiesServiceUpdateRequest`](OnDutiesServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`OnDutiesServiceUpdateRequest`](OnDutiesServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OnDutiesServiceUpdateRequest`](OnDutiesServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`OnDutiesServiceUpdateRequest`](OnDutiesServiceUpdateRequest.md) \| `PlainMessage`\<[`OnDutiesServiceUpdateRequest`](OnDutiesServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`OnDutiesServiceUpdateRequest`](OnDutiesServiceUpdateRequest.md) \| `PlainMessage`\<[`OnDutiesServiceUpdateRequest`](OnDutiesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/on_duties.scailo_pb.ts:325

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OnDutiesServiceUpdateRequest`](OnDutiesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OnDutiesServiceUpdateRequest`](OnDutiesServiceUpdateRequest.md)

#### Defined in

src/on_duties.scailo_pb.ts:313

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OnDutiesServiceUpdateRequest`](OnDutiesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OnDutiesServiceUpdateRequest`](OnDutiesServiceUpdateRequest.md)

#### Defined in

src/on_duties.scailo_pb.ts:317

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OnDutiesServiceUpdateRequest`](OnDutiesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OnDutiesServiceUpdateRequest`](OnDutiesServiceUpdateRequest.md)

#### Defined in

src/on_duties.scailo_pb.ts:321
