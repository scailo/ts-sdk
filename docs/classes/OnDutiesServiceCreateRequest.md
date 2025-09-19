[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OnDutiesServiceCreateRequest

# Class: OnDutiesServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.OnDutiesServiceCreateRequest

## Hierarchy

- `Message`\<[`OnDutiesServiceCreateRequest`](OnDutiesServiceCreateRequest.md)\>

  ↳ **`OnDutiesServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](OnDutiesServiceCreateRequest.md#constructor)

### Properties

- [description](OnDutiesServiceCreateRequest.md#description)
- [entityUuid](OnDutiesServiceCreateRequest.md#entityuuid)
- [entryTimestamp](OnDutiesServiceCreateRequest.md#entrytimestamp)
- [exitTimestamp](OnDutiesServiceCreateRequest.md#exittimestamp)
- [formData](OnDutiesServiceCreateRequest.md#formdata)
- [referenceId](OnDutiesServiceCreateRequest.md#referenceid)
- [userComment](OnDutiesServiceCreateRequest.md#usercomment)
- [userId](OnDutiesServiceCreateRequest.md#userid)
- [vaultFolderId](OnDutiesServiceCreateRequest.md#vaultfolderid)
- [fields](OnDutiesServiceCreateRequest.md#fields)
- [runtime](OnDutiesServiceCreateRequest.md#runtime)
- [typeName](OnDutiesServiceCreateRequest.md#typename)

### Methods

- [clone](OnDutiesServiceCreateRequest.md#clone)
- [equals](OnDutiesServiceCreateRequest.md#equals)
- [fromBinary](OnDutiesServiceCreateRequest.md#frombinary)
- [fromJson](OnDutiesServiceCreateRequest.md#fromjson)
- [fromJsonString](OnDutiesServiceCreateRequest.md#fromjsonstring)
- [getType](OnDutiesServiceCreateRequest.md#gettype)
- [toBinary](OnDutiesServiceCreateRequest.md#tobinary)
- [toJSON](OnDutiesServiceCreateRequest.md#tojson)
- [toJson](OnDutiesServiceCreateRequest.md#tojson-1)
- [toJsonString](OnDutiesServiceCreateRequest.md#tojsonstring)
- [equals](OnDutiesServiceCreateRequest.md#equals-1)
- [fromBinary](OnDutiesServiceCreateRequest.md#frombinary-1)
- [fromJson](OnDutiesServiceCreateRequest.md#fromjson-1)
- [fromJsonString](OnDutiesServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new OnDutiesServiceCreateRequest**(`data?`): [`OnDutiesServiceCreateRequest`](OnDutiesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OnDutiesServiceCreateRequest`](OnDutiesServiceCreateRequest.md)\> |

#### Returns

[`OnDutiesServiceCreateRequest`](OnDutiesServiceCreateRequest.md)

#### Overrides

Message\&lt;OnDutiesServiceCreateRequest\&gt;.constructor

#### Defined in

[src/on_duties.scailo_pb.ts:188](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L188)

## Properties

### description

• **description**: `string` = `""`

The description of the onduty

**`Generated`**

from field: string description = 14;

#### Defined in

[src/on_duties.scailo_pb.ts:179](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L179)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/on_duties.scailo_pb.ts:130](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L130)

___

### entryTimestamp

• **entryTimestamp**: `bigint` = `protoInt64.zero`

The UNIX timestamp from when the onduty begins

**`Generated`**

from field: uint64 entry_timestamp = 12;

#### Defined in

[src/on_duties.scailo_pb.ts:165](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L165)

___

### exitTimestamp

• **exitTimestamp**: `bigint` = `protoInt64.zero`

The UNIX timestamp from when the onduty ends

**`Generated`**

from field: uint64 exit_timestamp = 13;

#### Defined in

[src/on_duties.scailo_pb.ts:172](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L172)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/on_duties.scailo_pb.ts:186](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L186)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the onduty

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/on_duties.scailo_pb.ts:151](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L151)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/on_duties.scailo_pb.ts:137](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L137)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user who has requested for onduty

**`Generated`**

from field: uint64 user_id = 11;

#### Defined in

[src/on_duties.scailo_pb.ts:158](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L158)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/on_duties.scailo_pb.ts:144](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L144)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/on_duties.scailo_pb.ts:195](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L195)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/on_duties.scailo_pb.ts:193](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L193)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OnDutiesServiceCreateRequest"``

#### Defined in

[src/on_duties.scailo_pb.ts:194](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L194)

## Methods

### clone

▸ **clone**(): [`OnDutiesServiceCreateRequest`](OnDutiesServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`OnDutiesServiceCreateRequest`](OnDutiesServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`OnDutiesServiceCreateRequest`](OnDutiesServiceCreateRequest.md) \| `PlainMessage`\<[`OnDutiesServiceCreateRequest`](OnDutiesServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`OnDutiesServiceCreateRequest`](OnDutiesServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OnDutiesServiceCreateRequest`](OnDutiesServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`OnDutiesServiceCreateRequest`](OnDutiesServiceCreateRequest.md) \| `PlainMessage`\<[`OnDutiesServiceCreateRequest`](OnDutiesServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`OnDutiesServiceCreateRequest`](OnDutiesServiceCreateRequest.md) \| `PlainMessage`\<[`OnDutiesServiceCreateRequest`](OnDutiesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/on_duties.scailo_pb.ts:219](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L219)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OnDutiesServiceCreateRequest`](OnDutiesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OnDutiesServiceCreateRequest`](OnDutiesServiceCreateRequest.md)

#### Defined in

[src/on_duties.scailo_pb.ts:207](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L207)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OnDutiesServiceCreateRequest`](OnDutiesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OnDutiesServiceCreateRequest`](OnDutiesServiceCreateRequest.md)

#### Defined in

[src/on_duties.scailo_pb.ts:211](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L211)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OnDutiesServiceCreateRequest`](OnDutiesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OnDutiesServiceCreateRequest`](OnDutiesServiceCreateRequest.md)

#### Defined in

[src/on_duties.scailo_pb.ts:215](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L215)
