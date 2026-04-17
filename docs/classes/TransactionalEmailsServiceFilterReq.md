[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / TransactionalEmailsServiceFilterReq

# Class: TransactionalEmailsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.TransactionalEmailsServiceFilterReq

## Hierarchy

- `Message`\<[`TransactionalEmailsServiceFilterReq`](TransactionalEmailsServiceFilterReq.md)\>

  ↳ **`TransactionalEmailsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](TransactionalEmailsServiceFilterReq.md#constructor)

### Properties

- [count](TransactionalEmailsServiceFilterReq.md#count)
- [creationTimestampEnd](TransactionalEmailsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](TransactionalEmailsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](TransactionalEmailsServiceFilterReq.md#entityuuid)
- [isActive](TransactionalEmailsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](TransactionalEmailsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](TransactionalEmailsServiceFilterReq.md#modificationtimestampstart)
- [offset](TransactionalEmailsServiceFilterReq.md#offset)
- [recipientEmailAddress](TransactionalEmailsServiceFilterReq.md#recipientemailaddress)
- [replyTo](TransactionalEmailsServiceFilterReq.md#replyto)
- [senderName](TransactionalEmailsServiceFilterReq.md#sendername)
- [sortKey](TransactionalEmailsServiceFilterReq.md#sortkey)
- [sortOrder](TransactionalEmailsServiceFilterReq.md#sortorder)
- [subject](TransactionalEmailsServiceFilterReq.md#subject)
- [title](TransactionalEmailsServiceFilterReq.md#title)
- [fields](TransactionalEmailsServiceFilterReq.md#fields)
- [runtime](TransactionalEmailsServiceFilterReq.md#runtime)
- [typeName](TransactionalEmailsServiceFilterReq.md#typename)

### Methods

- [clone](TransactionalEmailsServiceFilterReq.md#clone)
- [equals](TransactionalEmailsServiceFilterReq.md#equals)
- [fromBinary](TransactionalEmailsServiceFilterReq.md#frombinary)
- [fromJson](TransactionalEmailsServiceFilterReq.md#fromjson)
- [fromJsonString](TransactionalEmailsServiceFilterReq.md#fromjsonstring)
- [getType](TransactionalEmailsServiceFilterReq.md#gettype)
- [toBinary](TransactionalEmailsServiceFilterReq.md#tobinary)
- [toJSON](TransactionalEmailsServiceFilterReq.md#tojson)
- [toJson](TransactionalEmailsServiceFilterReq.md#tojson-1)
- [toJsonString](TransactionalEmailsServiceFilterReq.md#tojsonstring)
- [equals](TransactionalEmailsServiceFilterReq.md#equals-1)
- [fromBinary](TransactionalEmailsServiceFilterReq.md#frombinary-1)
- [fromJson](TransactionalEmailsServiceFilterReq.md#fromjson-1)
- [fromJsonString](TransactionalEmailsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new TransactionalEmailsServiceFilterReq**(`data?`): [`TransactionalEmailsServiceFilterReq`](TransactionalEmailsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`TransactionalEmailsServiceFilterReq`](TransactionalEmailsServiceFilterReq.md)\> |

#### Returns

[`TransactionalEmailsServiceFilterReq`](TransactionalEmailsServiceFilterReq.md)

#### Overrides

Message\&lt;TransactionalEmailsServiceFilterReq\&gt;.constructor

#### Defined in

[src/transactional_emails.scailo_pb.ts:672](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/transactional_emails.scailo_pb.ts#L672)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

Number of records to fetch. **Critical:** Use `-1` to retrieve all records. A value of `0` will return no results. Default is `0`.

**`Example`**

```ts
100
```

**`Regex`**

^(?:-1|0|[1-9][0-9]*)$

**`Format`**

Must be -1 or any non-negative integer (>= -1).

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/transactional_emails.scailo_pb.ts:517](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/transactional_emails.scailo_pb.ts#L517)

___

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

[src/transactional_emails.scailo_pb.ts:587](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/transactional_emails.scailo_pb.ts#L587)

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

[src/transactional_emails.scailo_pb.ts:571](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/transactional_emails.scailo_pb.ts#L571)

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

[src/transactional_emails.scailo_pb.ts:635](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/transactional_emails.scailo_pb.ts#L635)

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

[src/transactional_emails.scailo_pb.ts:501](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/transactional_emails.scailo_pb.ts#L501)

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

[src/transactional_emails.scailo_pb.ts:619](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/transactional_emails.scailo_pb.ts#L619)

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

[src/transactional_emails.scailo_pb.ts:603](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/transactional_emails.scailo_pb.ts#L603)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Number of records to skip (offset) for pagination.

**`Example`**

```ts
0
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/transactional_emails.scailo_pb.ts:533](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/transactional_emails.scailo_pb.ts#L533)

___

### recipientEmailAddress

• **recipientEmailAddress**: `string` = `""`

Stores the email address of the recipient

**`Generated`**

from field: string recipient_email_address = 40;

#### Defined in

[src/transactional_emails.scailo_pb.ts:670](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/transactional_emails.scailo_pb.ts#L670)

___

### replyTo

• **replyTo**: `string` = `""`

Stores the email address to which the reply could be sent

**`Generated`**

from field: string reply_to = 22;

#### Defined in

[src/transactional_emails.scailo_pb.ts:656](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/transactional_emails.scailo_pb.ts#L656)

___

### senderName

• **senderName**: `string` = `""`

Stores the name of the sender

**`Generated`**

from field: string sender_name = 20;

#### Defined in

[src/transactional_emails.scailo_pb.ts:642](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/transactional_emails.scailo_pb.ts#L642)

___

### sortKey

• **sortKey**: [`TRANSACTIONAL_EMAIL_SORT_KEY`](../enums/TRANSACTIONAL_EMAIL_SORT_KEY.md) = `TRANSACTIONAL_EMAIL_SORT_KEY.TRANSACTIONAL_EMAIL_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.TRANSACTIONAL_EMAIL_SORT_KEY sort_key = 5;

#### Defined in

[src/transactional_emails.scailo_pb.ts:555](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/transactional_emails.scailo_pb.ts#L555)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

**`Optional`**

**`Description`**

Sort direction.

**`Example`**

```ts
DESCENDING
```

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/transactional_emails.scailo_pb.ts:545](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/transactional_emails.scailo_pb.ts#L545)

___

### subject

• **subject**: `string` = `""`

Stores the subject of the transactional email

**`Generated`**

from field: string subject = 23;

#### Defined in

[src/transactional_emails.scailo_pb.ts:663](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/transactional_emails.scailo_pb.ts#L663)

___

### title

• **title**: `string` = `""`

Stores the title of the transactional email

**`Generated`**

from field: string title = 21;

#### Defined in

[src/transactional_emails.scailo_pb.ts:649](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/transactional_emails.scailo_pb.ts#L649)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/transactional_emails.scailo_pb.ts:679](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/transactional_emails.scailo_pb.ts#L679)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/transactional_emails.scailo_pb.ts:677](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/transactional_emails.scailo_pb.ts#L677)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TransactionalEmailsServiceFilterReq"``

#### Defined in

[src/transactional_emails.scailo_pb.ts:678](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/transactional_emails.scailo_pb.ts#L678)

## Methods

### clone

▸ **clone**(): [`TransactionalEmailsServiceFilterReq`](TransactionalEmailsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`TransactionalEmailsServiceFilterReq`](TransactionalEmailsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`TransactionalEmailsServiceFilterReq`](TransactionalEmailsServiceFilterReq.md) \| `PlainMessage`\<[`TransactionalEmailsServiceFilterReq`](TransactionalEmailsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`TransactionalEmailsServiceFilterReq`](TransactionalEmailsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`TransactionalEmailsServiceFilterReq`](TransactionalEmailsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`TransactionalEmailsServiceFilterReq`](TransactionalEmailsServiceFilterReq.md) \| `PlainMessage`\<[`TransactionalEmailsServiceFilterReq`](TransactionalEmailsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`TransactionalEmailsServiceFilterReq`](TransactionalEmailsServiceFilterReq.md) \| `PlainMessage`\<[`TransactionalEmailsServiceFilterReq`](TransactionalEmailsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/transactional_emails.scailo_pb.ts:709](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/transactional_emails.scailo_pb.ts#L709)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TransactionalEmailsServiceFilterReq`](TransactionalEmailsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`TransactionalEmailsServiceFilterReq`](TransactionalEmailsServiceFilterReq.md)

#### Defined in

[src/transactional_emails.scailo_pb.ts:697](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/transactional_emails.scailo_pb.ts#L697)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TransactionalEmailsServiceFilterReq`](TransactionalEmailsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TransactionalEmailsServiceFilterReq`](TransactionalEmailsServiceFilterReq.md)

#### Defined in

[src/transactional_emails.scailo_pb.ts:701](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/transactional_emails.scailo_pb.ts#L701)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TransactionalEmailsServiceFilterReq`](TransactionalEmailsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TransactionalEmailsServiceFilterReq`](TransactionalEmailsServiceFilterReq.md)

#### Defined in

[src/transactional_emails.scailo_pb.ts:705](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/transactional_emails.scailo_pb.ts#L705)
