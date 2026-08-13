[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LedgersServiceUpdateRequest

# Class: LedgersServiceUpdateRequest

Request message for updating an existing Ledger record.
Only applicable for records in `DRAFT` or `REVISION` states.
This message allows for modifying the name, and description
of an established Ledger.

**Note:** Only fields provided in the request will typically be updated.
The unique system ID is required to locate the target record.

**`Generated`**

from message Scailo.LedgersServiceUpdateRequest

## Hierarchy

- `Message`\<[`LedgersServiceUpdateRequest`](LedgersServiceUpdateRequest.md)\>

  ↳ **`LedgersServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](LedgersServiceUpdateRequest.md#constructor)

### Properties

- [description](LedgersServiceUpdateRequest.md#description)
- [id](LedgersServiceUpdateRequest.md#id)
- [name](LedgersServiceUpdateRequest.md#name)
- [notifyUsers](LedgersServiceUpdateRequest.md#notifyusers)
- [userComment](LedgersServiceUpdateRequest.md#usercomment)
- [fields](LedgersServiceUpdateRequest.md#fields)
- [runtime](LedgersServiceUpdateRequest.md#runtime)
- [typeName](LedgersServiceUpdateRequest.md#typename)

### Methods

- [clone](LedgersServiceUpdateRequest.md#clone)
- [equals](LedgersServiceUpdateRequest.md#equals)
- [fromBinary](LedgersServiceUpdateRequest.md#frombinary)
- [fromJson](LedgersServiceUpdateRequest.md#fromjson)
- [fromJsonString](LedgersServiceUpdateRequest.md#fromjsonstring)
- [getType](LedgersServiceUpdateRequest.md#gettype)
- [toBinary](LedgersServiceUpdateRequest.md#tobinary)
- [toJSON](LedgersServiceUpdateRequest.md#tojson)
- [toJson](LedgersServiceUpdateRequest.md#tojson-1)
- [toJsonString](LedgersServiceUpdateRequest.md#tojsonstring)
- [equals](LedgersServiceUpdateRequest.md#equals-1)
- [fromBinary](LedgersServiceUpdateRequest.md#frombinary-1)
- [fromJson](LedgersServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](LedgersServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new LedgersServiceUpdateRequest**(`data?`): [`LedgersServiceUpdateRequest`](LedgersServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LedgersServiceUpdateRequest`](LedgersServiceUpdateRequest.md)\> |

#### Returns

[`LedgersServiceUpdateRequest`](LedgersServiceUpdateRequest.md)

#### Overrides

Message\&lt;LedgersServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/ledgers.scailo_pb.ts:330](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L330)

## Properties

### description

• `Optional` **description**: `string`

**`Optional`**

**`Description`**

Clarifying details or context regarding the ledger's intended accounting use case, currency parameters, or scope.

**`Example`**

```ts
"Tracks day-to-day corporate operating expenses, utilities, and minor regional software licenses."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string description = 14;

#### Defined in

[src/ledgers.scailo_pb.ts:328](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L328)

___

### id

• **id**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the target record that needs to be updated.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/ledgers.scailo_pb.ts:284](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L284)

___

### name

• `Optional` **name**: `string`

**`Optional`**

**`Description`**

The official or friendly descriptive name of the ledger account.

**`Example`**

```ts
"General Operating Expenses"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string name = 10;

#### Defined in

[src/ledgers.scailo_pb.ts:312](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L312)

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

[src/ledgers.scailo_pb.ts:296](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L296)

___

### userComment

• `Optional` **userComment**: `string`

**`Optional`**

**`Description`**

Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.

**`Example`**

```ts
"This is a comment for audit purposes."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string user_comment = 1;

#### Defined in

[src/ledgers.scailo_pb.ts:268](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L268)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/ledgers.scailo_pb.ts:337](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L337)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/ledgers.scailo_pb.ts:335](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L335)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LedgersServiceUpdateRequest"``

#### Defined in

[src/ledgers.scailo_pb.ts:336](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L336)

## Methods

### clone

▸ **clone**(): [`LedgersServiceUpdateRequest`](LedgersServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`LedgersServiceUpdateRequest`](LedgersServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`LedgersServiceUpdateRequest`](LedgersServiceUpdateRequest.md) \| `PlainMessage`\<[`LedgersServiceUpdateRequest`](LedgersServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`LedgersServiceUpdateRequest`](LedgersServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LedgersServiceUpdateRequest`](LedgersServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`LedgersServiceUpdateRequest`](LedgersServiceUpdateRequest.md) \| `PlainMessage`\<[`LedgersServiceUpdateRequest`](LedgersServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`LedgersServiceUpdateRequest`](LedgersServiceUpdateRequest.md) \| `PlainMessage`\<[`LedgersServiceUpdateRequest`](LedgersServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/ledgers.scailo_pb.ts:357](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L357)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LedgersServiceUpdateRequest`](LedgersServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LedgersServiceUpdateRequest`](LedgersServiceUpdateRequest.md)

#### Defined in

[src/ledgers.scailo_pb.ts:345](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L345)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LedgersServiceUpdateRequest`](LedgersServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LedgersServiceUpdateRequest`](LedgersServiceUpdateRequest.md)

#### Defined in

[src/ledgers.scailo_pb.ts:349](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L349)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LedgersServiceUpdateRequest`](LedgersServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LedgersServiceUpdateRequest`](LedgersServiceUpdateRequest.md)

#### Defined in

[src/ledgers.scailo_pb.ts:353](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L353)
