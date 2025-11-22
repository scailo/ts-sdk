[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / TransactionalEmailsServiceCreateRequest

# Class: TransactionalEmailsServiceCreateRequest

Describes the necessary data structure during creation of a transactional email

**`Generated`**

from message Scailo.TransactionalEmailsServiceCreateRequest

## Hierarchy

- `Message`\<[`TransactionalEmailsServiceCreateRequest`](TransactionalEmailsServiceCreateRequest.md)\>

  ↳ **`TransactionalEmailsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](TransactionalEmailsServiceCreateRequest.md#constructor)

### Properties

- [attachments](TransactionalEmailsServiceCreateRequest.md#attachments)
- [content](TransactionalEmailsServiceCreateRequest.md#content)
- [entityUuid](TransactionalEmailsServiceCreateRequest.md#entityuuid)
- [recipients](TransactionalEmailsServiceCreateRequest.md#recipients)
- [replyTo](TransactionalEmailsServiceCreateRequest.md#replyto)
- [senderName](TransactionalEmailsServiceCreateRequest.md#sendername)
- [subject](TransactionalEmailsServiceCreateRequest.md#subject)
- [title](TransactionalEmailsServiceCreateRequest.md#title)
- [userComment](TransactionalEmailsServiceCreateRequest.md#usercomment)
- [fields](TransactionalEmailsServiceCreateRequest.md#fields)
- [runtime](TransactionalEmailsServiceCreateRequest.md#runtime)
- [typeName](TransactionalEmailsServiceCreateRequest.md#typename)

### Methods

- [clone](TransactionalEmailsServiceCreateRequest.md#clone)
- [equals](TransactionalEmailsServiceCreateRequest.md#equals)
- [fromBinary](TransactionalEmailsServiceCreateRequest.md#frombinary)
- [fromJson](TransactionalEmailsServiceCreateRequest.md#fromjson)
- [fromJsonString](TransactionalEmailsServiceCreateRequest.md#fromjsonstring)
- [getType](TransactionalEmailsServiceCreateRequest.md#gettype)
- [toBinary](TransactionalEmailsServiceCreateRequest.md#tobinary)
- [toJSON](TransactionalEmailsServiceCreateRequest.md#tojson)
- [toJson](TransactionalEmailsServiceCreateRequest.md#tojson-1)
- [toJsonString](TransactionalEmailsServiceCreateRequest.md#tojsonstring)
- [equals](TransactionalEmailsServiceCreateRequest.md#equals-1)
- [fromBinary](TransactionalEmailsServiceCreateRequest.md#frombinary-1)
- [fromJson](TransactionalEmailsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](TransactionalEmailsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new TransactionalEmailsServiceCreateRequest**(`data?`): [`TransactionalEmailsServiceCreateRequest`](TransactionalEmailsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`TransactionalEmailsServiceCreateRequest`](TransactionalEmailsServiceCreateRequest.md)\> |

#### Returns

[`TransactionalEmailsServiceCreateRequest`](TransactionalEmailsServiceCreateRequest.md)

#### Overrides

Message\&lt;TransactionalEmailsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/transactional_emails.scailo_pb.ts:115](https://github.com/scailo/ts-sdk/blob/62dbffdf6a2951e2cc142a128ab465826fed4523/src/transactional_emails.scailo_pb.ts#L115)

## Properties

### attachments

• **attachments**: [`TransactionalEmailsServiceAddAttachmentRequest`](TransactionalEmailsServiceAddAttachmentRequest.md)[] = `[]`

The list of attachments

**`Generated`**

from field: repeated Scailo.TransactionalEmailsServiceAddAttachmentRequest attachments = 40;

#### Defined in

[src/transactional_emails.scailo_pb.ts:113](https://github.com/scailo/ts-sdk/blob/62dbffdf6a2951e2cc142a128ab465826fed4523/src/transactional_emails.scailo_pb.ts#L113)

___

### content

• **content**: `string` = `""`

Stores the content of the transactional email

**`Generated`**

from field: string content = 14;

#### Defined in

[src/transactional_emails.scailo_pb.ts:99](https://github.com/scailo/ts-sdk/blob/62dbffdf6a2951e2cc142a128ab465826fed4523/src/transactional_emails.scailo_pb.ts#L99)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/transactional_emails.scailo_pb.ts:57](https://github.com/scailo/ts-sdk/blob/62dbffdf6a2951e2cc142a128ab465826fed4523/src/transactional_emails.scailo_pb.ts#L57)

___

### recipients

• **recipients**: [`TransactionalEmailsServiceAddRecipientRequest`](TransactionalEmailsServiceAddRecipientRequest.md)[] = `[]`

The list of recipients

**`Generated`**

from field: repeated Scailo.TransactionalEmailsServiceAddRecipientRequest recipients = 30;

#### Defined in

[src/transactional_emails.scailo_pb.ts:106](https://github.com/scailo/ts-sdk/blob/62dbffdf6a2951e2cc142a128ab465826fed4523/src/transactional_emails.scailo_pb.ts#L106)

___

### replyTo

• **replyTo**: `string` = `""`

Stores the email address to which the reply could be sent

**`Generated`**

from field: string reply_to = 12;

#### Defined in

[src/transactional_emails.scailo_pb.ts:85](https://github.com/scailo/ts-sdk/blob/62dbffdf6a2951e2cc142a128ab465826fed4523/src/transactional_emails.scailo_pb.ts#L85)

___

### senderName

• **senderName**: `string` = `""`

Stores the name of the sender

**`Generated`**

from field: string sender_name = 10;

#### Defined in

[src/transactional_emails.scailo_pb.ts:71](https://github.com/scailo/ts-sdk/blob/62dbffdf6a2951e2cc142a128ab465826fed4523/src/transactional_emails.scailo_pb.ts#L71)

___

### subject

• **subject**: `string` = `""`

Stores the subject of the transactional email

**`Generated`**

from field: string subject = 13;

#### Defined in

[src/transactional_emails.scailo_pb.ts:92](https://github.com/scailo/ts-sdk/blob/62dbffdf6a2951e2cc142a128ab465826fed4523/src/transactional_emails.scailo_pb.ts#L92)

___

### title

• **title**: `string` = `""`

Stores the title of the transactional email

**`Generated`**

from field: string title = 11;

#### Defined in

[src/transactional_emails.scailo_pb.ts:78](https://github.com/scailo/ts-sdk/blob/62dbffdf6a2951e2cc142a128ab465826fed4523/src/transactional_emails.scailo_pb.ts#L78)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/transactional_emails.scailo_pb.ts:64](https://github.com/scailo/ts-sdk/blob/62dbffdf6a2951e2cc142a128ab465826fed4523/src/transactional_emails.scailo_pb.ts#L64)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/transactional_emails.scailo_pb.ts:122](https://github.com/scailo/ts-sdk/blob/62dbffdf6a2951e2cc142a128ab465826fed4523/src/transactional_emails.scailo_pb.ts#L122)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/transactional_emails.scailo_pb.ts:120](https://github.com/scailo/ts-sdk/blob/62dbffdf6a2951e2cc142a128ab465826fed4523/src/transactional_emails.scailo_pb.ts#L120)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TransactionalEmailsServiceCreateRequest"``

#### Defined in

[src/transactional_emails.scailo_pb.ts:121](https://github.com/scailo/ts-sdk/blob/62dbffdf6a2951e2cc142a128ab465826fed4523/src/transactional_emails.scailo_pb.ts#L121)

## Methods

### clone

▸ **clone**(): [`TransactionalEmailsServiceCreateRequest`](TransactionalEmailsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`TransactionalEmailsServiceCreateRequest`](TransactionalEmailsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`TransactionalEmailsServiceCreateRequest`](TransactionalEmailsServiceCreateRequest.md) \| `PlainMessage`\<[`TransactionalEmailsServiceCreateRequest`](TransactionalEmailsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`TransactionalEmailsServiceCreateRequest`](TransactionalEmailsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`TransactionalEmailsServiceCreateRequest`](TransactionalEmailsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`TransactionalEmailsServiceCreateRequest`](TransactionalEmailsServiceCreateRequest.md) \| `PlainMessage`\<[`TransactionalEmailsServiceCreateRequest`](TransactionalEmailsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`TransactionalEmailsServiceCreateRequest`](TransactionalEmailsServiceCreateRequest.md) \| `PlainMessage`\<[`TransactionalEmailsServiceCreateRequest`](TransactionalEmailsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/transactional_emails.scailo_pb.ts:146](https://github.com/scailo/ts-sdk/blob/62dbffdf6a2951e2cc142a128ab465826fed4523/src/transactional_emails.scailo_pb.ts#L146)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TransactionalEmailsServiceCreateRequest`](TransactionalEmailsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`TransactionalEmailsServiceCreateRequest`](TransactionalEmailsServiceCreateRequest.md)

#### Defined in

[src/transactional_emails.scailo_pb.ts:134](https://github.com/scailo/ts-sdk/blob/62dbffdf6a2951e2cc142a128ab465826fed4523/src/transactional_emails.scailo_pb.ts#L134)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TransactionalEmailsServiceCreateRequest`](TransactionalEmailsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TransactionalEmailsServiceCreateRequest`](TransactionalEmailsServiceCreateRequest.md)

#### Defined in

[src/transactional_emails.scailo_pb.ts:138](https://github.com/scailo/ts-sdk/blob/62dbffdf6a2951e2cc142a128ab465826fed4523/src/transactional_emails.scailo_pb.ts#L138)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TransactionalEmailsServiceCreateRequest`](TransactionalEmailsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TransactionalEmailsServiceCreateRequest`](TransactionalEmailsServiceCreateRequest.md)

#### Defined in

[src/transactional_emails.scailo_pb.ts:142](https://github.com/scailo/ts-sdk/blob/62dbffdf6a2951e2cc142a128ab465826fed4523/src/transactional_emails.scailo_pb.ts#L142)
