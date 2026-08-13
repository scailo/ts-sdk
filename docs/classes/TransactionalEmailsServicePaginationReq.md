[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / TransactionalEmailsServicePaginationReq

# Class: TransactionalEmailsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.TransactionalEmailsServicePaginationReq

## Hierarchy

- `Message`\<[`TransactionalEmailsServicePaginationReq`](TransactionalEmailsServicePaginationReq.md)\>

  ↳ **`TransactionalEmailsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](TransactionalEmailsServicePaginationReq.md#constructor)

### Properties

- [count](TransactionalEmailsServicePaginationReq.md#count)
- [isActive](TransactionalEmailsServicePaginationReq.md#isactive)
- [offset](TransactionalEmailsServicePaginationReq.md#offset)
- [sortKey](TransactionalEmailsServicePaginationReq.md#sortkey)
- [sortOrder](TransactionalEmailsServicePaginationReq.md#sortorder)
- [fields](TransactionalEmailsServicePaginationReq.md#fields)
- [runtime](TransactionalEmailsServicePaginationReq.md#runtime)
- [typeName](TransactionalEmailsServicePaginationReq.md#typename)

### Methods

- [clone](TransactionalEmailsServicePaginationReq.md#clone)
- [equals](TransactionalEmailsServicePaginationReq.md#equals)
- [fromBinary](TransactionalEmailsServicePaginationReq.md#frombinary)
- [fromJson](TransactionalEmailsServicePaginationReq.md#fromjson)
- [fromJsonString](TransactionalEmailsServicePaginationReq.md#fromjsonstring)
- [getType](TransactionalEmailsServicePaginationReq.md#gettype)
- [toBinary](TransactionalEmailsServicePaginationReq.md#tobinary)
- [toJSON](TransactionalEmailsServicePaginationReq.md#tojson)
- [toJson](TransactionalEmailsServicePaginationReq.md#tojson-1)
- [toJsonString](TransactionalEmailsServicePaginationReq.md#tojsonstring)
- [equals](TransactionalEmailsServicePaginationReq.md#equals-1)
- [fromBinary](TransactionalEmailsServicePaginationReq.md#frombinary-1)
- [fromJson](TransactionalEmailsServicePaginationReq.md#fromjson-1)
- [fromJsonString](TransactionalEmailsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new TransactionalEmailsServicePaginationReq**(`data?`): [`TransactionalEmailsServicePaginationReq`](TransactionalEmailsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`TransactionalEmailsServicePaginationReq`](TransactionalEmailsServicePaginationReq.md)\> |

#### Returns

[`TransactionalEmailsServicePaginationReq`](TransactionalEmailsServicePaginationReq.md)

#### Overrides

Message\&lt;TransactionalEmailsServicePaginationReq\&gt;.constructor

#### Defined in

[src/transactional_emails.scailo_pb.ts:461](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/transactional_emails.scailo_pb.ts#L461)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

Number of records to return per page.

**`Example`**

```ts
50
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Must be a strictly positive integer (1 or greater).

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/transactional_emails.scailo_pb.ts:421](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/transactional_emails.scailo_pb.ts#L421)

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

[src/transactional_emails.scailo_pb.ts:405](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/transactional_emails.scailo_pb.ts#L405)

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

[src/transactional_emails.scailo_pb.ts:437](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/transactional_emails.scailo_pb.ts#L437)

___

### sortKey

• **sortKey**: [`TRANSACTIONAL_EMAIL_SORT_KEY`](../enums/TRANSACTIONAL_EMAIL_SORT_KEY.md) = `TRANSACTIONAL_EMAIL_SORT_KEY.TRANSACTIONAL_EMAIL_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The specific field key to sort the results by.

**`Generated`**

from field: Scailo.TRANSACTIONAL_EMAIL_SORT_KEY sort_key = 5;

#### Defined in

[src/transactional_emails.scailo_pb.ts:459](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/transactional_emails.scailo_pb.ts#L459)

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

[src/transactional_emails.scailo_pb.ts:449](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/transactional_emails.scailo_pb.ts#L449)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/transactional_emails.scailo_pb.ts:468](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/transactional_emails.scailo_pb.ts#L468)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/transactional_emails.scailo_pb.ts:466](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/transactional_emails.scailo_pb.ts#L466)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TransactionalEmailsServicePaginationReq"``

#### Defined in

[src/transactional_emails.scailo_pb.ts:467](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/transactional_emails.scailo_pb.ts#L467)

## Methods

### clone

▸ **clone**(): [`TransactionalEmailsServicePaginationReq`](TransactionalEmailsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`TransactionalEmailsServicePaginationReq`](TransactionalEmailsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`TransactionalEmailsServicePaginationReq`](TransactionalEmailsServicePaginationReq.md) \| `PlainMessage`\<[`TransactionalEmailsServicePaginationReq`](TransactionalEmailsServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`TransactionalEmailsServicePaginationReq`](TransactionalEmailsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`TransactionalEmailsServicePaginationReq`](TransactionalEmailsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`TransactionalEmailsServicePaginationReq`](TransactionalEmailsServicePaginationReq.md) \| `PlainMessage`\<[`TransactionalEmailsServicePaginationReq`](TransactionalEmailsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`TransactionalEmailsServicePaginationReq`](TransactionalEmailsServicePaginationReq.md) \| `PlainMessage`\<[`TransactionalEmailsServicePaginationReq`](TransactionalEmailsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/transactional_emails.scailo_pb.ts:488](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/transactional_emails.scailo_pb.ts#L488)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TransactionalEmailsServicePaginationReq`](TransactionalEmailsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`TransactionalEmailsServicePaginationReq`](TransactionalEmailsServicePaginationReq.md)

#### Defined in

[src/transactional_emails.scailo_pb.ts:476](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/transactional_emails.scailo_pb.ts#L476)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TransactionalEmailsServicePaginationReq`](TransactionalEmailsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TransactionalEmailsServicePaginationReq`](TransactionalEmailsServicePaginationReq.md)

#### Defined in

[src/transactional_emails.scailo_pb.ts:480](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/transactional_emails.scailo_pb.ts#L480)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TransactionalEmailsServicePaginationReq`](TransactionalEmailsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TransactionalEmailsServicePaginationReq`](TransactionalEmailsServicePaginationReq.md)

#### Defined in

[src/transactional_emails.scailo_pb.ts:484](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/transactional_emails.scailo_pb.ts#L484)
