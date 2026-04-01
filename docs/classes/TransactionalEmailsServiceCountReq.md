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

[src/transactional_emails.scailo_pb.ts:848](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/transactional_emails.scailo_pb.ts#L848)

## Properties

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records created ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/transactional_emails.scailo_pb.ts:763](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/transactional_emails.scailo_pb.ts#L763)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records created ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/transactional_emails.scailo_pb.ts:747](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/transactional_emails.scailo_pb.ts#L747)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Optional`**

**`Description`**

Filter by the organization UUID.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/transactional_emails.scailo_pb.ts:811](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/transactional_emails.scailo_pb.ts#L811)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/transactional_emails.scailo_pb.ts:731](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/transactional_emails.scailo_pb.ts#L731)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records modified ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/transactional_emails.scailo_pb.ts:795](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/transactional_emails.scailo_pb.ts#L795)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records modified ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/transactional_emails.scailo_pb.ts:779](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/transactional_emails.scailo_pb.ts#L779)

___

### recipientEmailAddress

• **recipientEmailAddress**: `string` = `""`

Stores the email address of the recipient

**`Generated`**

from field: string recipient_email_address = 40;

#### Defined in

[src/transactional_emails.scailo_pb.ts:846](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/transactional_emails.scailo_pb.ts#L846)

___

### replyTo

• **replyTo**: `string` = `""`

Stores the email address to which the reply could be sent

**`Generated`**

from field: string reply_to = 22;

#### Defined in

[src/transactional_emails.scailo_pb.ts:832](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/transactional_emails.scailo_pb.ts#L832)

___

### senderName

• **senderName**: `string` = `""`

Stores the name of the sender

**`Generated`**

from field: string sender_name = 20;

#### Defined in

[src/transactional_emails.scailo_pb.ts:818](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/transactional_emails.scailo_pb.ts#L818)

___

### subject

• **subject**: `string` = `""`

Stores the subject of the transactional email

**`Generated`**

from field: string subject = 23;

#### Defined in

[src/transactional_emails.scailo_pb.ts:839](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/transactional_emails.scailo_pb.ts#L839)

___

### title

• **title**: `string` = `""`

Stores the title of the transactional email

**`Generated`**

from field: string title = 21;

#### Defined in

[src/transactional_emails.scailo_pb.ts:825](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/transactional_emails.scailo_pb.ts#L825)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/transactional_emails.scailo_pb.ts:855](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/transactional_emails.scailo_pb.ts#L855)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/transactional_emails.scailo_pb.ts:853](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/transactional_emails.scailo_pb.ts#L853)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TransactionalEmailsServiceCountReq"``

#### Defined in

[src/transactional_emails.scailo_pb.ts:854](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/transactional_emails.scailo_pb.ts#L854)

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

[src/transactional_emails.scailo_pb.ts:881](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/transactional_emails.scailo_pb.ts#L881)

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

[src/transactional_emails.scailo_pb.ts:869](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/transactional_emails.scailo_pb.ts#L869)

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

[src/transactional_emails.scailo_pb.ts:873](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/transactional_emails.scailo_pb.ts#L873)

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

[src/transactional_emails.scailo_pb.ts:877](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/transactional_emails.scailo_pb.ts#L877)
