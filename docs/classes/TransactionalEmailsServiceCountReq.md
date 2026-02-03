[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / TransactionalEmailsServiceCountReq

# Class: TransactionalEmailsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.TransactionalEmailsServiceCountReq

## Hierarchy

- `Message`\<[`TransactionalEmailsServiceCountReq`](TransactionalEmailsServiceCountReq.md)\>

  ↳ **`TransactionalEmailsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](TransactionalEmailsServiceCountReq.md#constructor)

### Properties

- [creationTimestampEnd](TransactionalEmailsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](TransactionalEmailsServiceCountReq.md#creationtimestampstart)
- [entityUuid](TransactionalEmailsServiceCountReq.md#entityuuid)
- [isActive](TransactionalEmailsServiceCountReq.md#isactive)
- [modificationTimestampEnd](TransactionalEmailsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](TransactionalEmailsServiceCountReq.md#modificationtimestampstart)
- [recipientEmailAddress](TransactionalEmailsServiceCountReq.md#recipientemailaddress)
- [replyTo](TransactionalEmailsServiceCountReq.md#replyto)
- [senderName](TransactionalEmailsServiceCountReq.md#sendername)
- [subject](TransactionalEmailsServiceCountReq.md#subject)
- [title](TransactionalEmailsServiceCountReq.md#title)
- [fields](TransactionalEmailsServiceCountReq.md#fields)
- [runtime](TransactionalEmailsServiceCountReq.md#runtime)
- [typeName](TransactionalEmailsServiceCountReq.md#typename)

### Methods

- [clone](TransactionalEmailsServiceCountReq.md#clone)
- [equals](TransactionalEmailsServiceCountReq.md#equals)
- [fromBinary](TransactionalEmailsServiceCountReq.md#frombinary)
- [fromJson](TransactionalEmailsServiceCountReq.md#fromjson)
- [fromJsonString](TransactionalEmailsServiceCountReq.md#fromjsonstring)
- [getType](TransactionalEmailsServiceCountReq.md#gettype)
- [toBinary](TransactionalEmailsServiceCountReq.md#tobinary)
- [toJSON](TransactionalEmailsServiceCountReq.md#tojson)
- [toJson](TransactionalEmailsServiceCountReq.md#tojson-1)
- [toJsonString](TransactionalEmailsServiceCountReq.md#tojsonstring)
- [equals](TransactionalEmailsServiceCountReq.md#equals-1)
- [fromBinary](TransactionalEmailsServiceCountReq.md#frombinary-1)
- [fromJson](TransactionalEmailsServiceCountReq.md#fromjson-1)
- [fromJsonString](TransactionalEmailsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new TransactionalEmailsServiceCountReq**(`data?`): [`TransactionalEmailsServiceCountReq`](TransactionalEmailsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`TransactionalEmailsServiceCountReq`](TransactionalEmailsServiceCountReq.md)\> |

#### Returns

[`TransactionalEmailsServiceCountReq`](TransactionalEmailsServiceCountReq.md)

#### Overrides

Message\&lt;TransactionalEmailsServiceCountReq\&gt;.constructor

#### Defined in

[src/transactional_emails.scailo_pb.ts:669](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/transactional_emails.scailo_pb.ts#L669)

## Properties

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/transactional_emails.scailo_pb.ts:611](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/transactional_emails.scailo_pb.ts#L611)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/transactional_emails.scailo_pb.ts:604](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/transactional_emails.scailo_pb.ts#L604)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/transactional_emails.scailo_pb.ts:632](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/transactional_emails.scailo_pb.ts#L632)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/transactional_emails.scailo_pb.ts:597](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/transactional_emails.scailo_pb.ts#L597)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/transactional_emails.scailo_pb.ts:625](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/transactional_emails.scailo_pb.ts#L625)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/transactional_emails.scailo_pb.ts:618](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/transactional_emails.scailo_pb.ts#L618)

___

### recipientEmailAddress

• **recipientEmailAddress**: `string` = `""`

Stores the email address of the recipient

**`Generated`**

from field: string recipient_email_address = 40;

#### Defined in

[src/transactional_emails.scailo_pb.ts:667](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/transactional_emails.scailo_pb.ts#L667)

___

### replyTo

• **replyTo**: `string` = `""`

Stores the email address to which the reply could be sent

**`Generated`**

from field: string reply_to = 22;

#### Defined in

[src/transactional_emails.scailo_pb.ts:653](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/transactional_emails.scailo_pb.ts#L653)

___

### senderName

• **senderName**: `string` = `""`

Stores the name of the sender

**`Generated`**

from field: string sender_name = 20;

#### Defined in

[src/transactional_emails.scailo_pb.ts:639](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/transactional_emails.scailo_pb.ts#L639)

___

### subject

• **subject**: `string` = `""`

Stores the subject of the transactional email

**`Generated`**

from field: string subject = 23;

#### Defined in

[src/transactional_emails.scailo_pb.ts:660](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/transactional_emails.scailo_pb.ts#L660)

___

### title

• **title**: `string` = `""`

Stores the title of the transactional email

**`Generated`**

from field: string title = 21;

#### Defined in

[src/transactional_emails.scailo_pb.ts:646](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/transactional_emails.scailo_pb.ts#L646)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/transactional_emails.scailo_pb.ts:676](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/transactional_emails.scailo_pb.ts#L676)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/transactional_emails.scailo_pb.ts:674](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/transactional_emails.scailo_pb.ts#L674)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TransactionalEmailsServiceCountReq"``

#### Defined in

[src/transactional_emails.scailo_pb.ts:675](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/transactional_emails.scailo_pb.ts#L675)

## Methods

### clone

▸ **clone**(): [`TransactionalEmailsServiceCountReq`](TransactionalEmailsServiceCountReq.md)

Create a deep copy.

#### Returns

[`TransactionalEmailsServiceCountReq`](TransactionalEmailsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`TransactionalEmailsServiceCountReq`](TransactionalEmailsServiceCountReq.md) \| `PlainMessage`\<[`TransactionalEmailsServiceCountReq`](TransactionalEmailsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`TransactionalEmailsServiceCountReq`](TransactionalEmailsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`TransactionalEmailsServiceCountReq`](TransactionalEmailsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`TransactionalEmailsServiceCountReq`](TransactionalEmailsServiceCountReq.md) \| `PlainMessage`\<[`TransactionalEmailsServiceCountReq`](TransactionalEmailsServiceCountReq.md)\> |
| `b` | `undefined` \| [`TransactionalEmailsServiceCountReq`](TransactionalEmailsServiceCountReq.md) \| `PlainMessage`\<[`TransactionalEmailsServiceCountReq`](TransactionalEmailsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/transactional_emails.scailo_pb.ts:702](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/transactional_emails.scailo_pb.ts#L702)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TransactionalEmailsServiceCountReq`](TransactionalEmailsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`TransactionalEmailsServiceCountReq`](TransactionalEmailsServiceCountReq.md)

#### Defined in

[src/transactional_emails.scailo_pb.ts:690](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/transactional_emails.scailo_pb.ts#L690)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TransactionalEmailsServiceCountReq`](TransactionalEmailsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TransactionalEmailsServiceCountReq`](TransactionalEmailsServiceCountReq.md)

#### Defined in

[src/transactional_emails.scailo_pb.ts:694](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/transactional_emails.scailo_pb.ts#L694)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TransactionalEmailsServiceCountReq`](TransactionalEmailsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TransactionalEmailsServiceCountReq`](TransactionalEmailsServiceCountReq.md)

#### Defined in

[src/transactional_emails.scailo_pb.ts:698](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/transactional_emails.scailo_pb.ts#L698)
