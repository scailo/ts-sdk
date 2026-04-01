[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / TransactionalEmailPaginationResp

# Class: TransactionalEmailPaginationResp

Describes the data structure that responds to a pagination request

**`Generated`**

from message Scailo.TransactionalEmailPaginationResp

## Hierarchy

- `Message`\<[`TransactionalEmailPaginationResp`](TransactionalEmailPaginationResp.md)\>

  ↳ **`TransactionalEmailPaginationResp`**

## Table of contents

### Constructors

- [constructor](TransactionalEmailPaginationResp.md#constructor)

### Properties

- [count](TransactionalEmailPaginationResp.md#count)
- [offset](TransactionalEmailPaginationResp.md#offset)
- [payload](TransactionalEmailPaginationResp.md#payload)
- [total](TransactionalEmailPaginationResp.md#total)
- [fields](TransactionalEmailPaginationResp.md#fields)
- [runtime](TransactionalEmailPaginationResp.md#runtime)
- [typeName](TransactionalEmailPaginationResp.md#typename)

### Methods

- [clone](TransactionalEmailPaginationResp.md#clone)
- [equals](TransactionalEmailPaginationResp.md#equals)
- [fromBinary](TransactionalEmailPaginationResp.md#frombinary)
- [fromJson](TransactionalEmailPaginationResp.md#fromjson)
- [fromJsonString](TransactionalEmailPaginationResp.md#fromjsonstring)
- [getType](TransactionalEmailPaginationResp.md#gettype)
- [toBinary](TransactionalEmailPaginationResp.md#tobinary)
- [toJSON](TransactionalEmailPaginationResp.md#tojson)
- [toJson](TransactionalEmailPaginationResp.md#tojson-1)
- [toJsonString](TransactionalEmailPaginationResp.md#tojsonstring)
- [equals](TransactionalEmailPaginationResp.md#equals-1)
- [fromBinary](TransactionalEmailPaginationResp.md#frombinary-1)
- [fromJson](TransactionalEmailPaginationResp.md#fromjson-1)
- [fromJsonString](TransactionalEmailPaginationResp.md#fromjsonstring-1)

## Constructors

### constructor

• **new TransactionalEmailPaginationResp**(`data?`): [`TransactionalEmailPaginationResp`](TransactionalEmailPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`TransactionalEmailPaginationResp`](TransactionalEmailPaginationResp.md)\> |

#### Returns

[`TransactionalEmailPaginationResp`](TransactionalEmailPaginationResp.md)

#### Overrides

Message\&lt;TransactionalEmailPaginationResp\&gt;.constructor

#### Defined in

[src/transactional_emails.scailo_pb.ts:348](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/transactional_emails.scailo_pb.ts#L348)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

**`Description`**

Number of records returned in the current response slice.

**`Example`**

```ts
50
```

**`Generated`**

from field: uint64 count = 1;

#### Defined in

[src/transactional_emails.scailo_pb.ts:318](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/transactional_emails.scailo_pb.ts#L318)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

**`Description`**

The offset provided in the request.

**`Example`**

```ts
0
```

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

[src/transactional_emails.scailo_pb.ts:328](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/transactional_emails.scailo_pb.ts#L328)

___

### payload

• **payload**: [`TransactionalEmail`](TransactionalEmail.md)[] = `[]`

**`Description`**

The array of records for the current page.

**`Generated`**

from field: repeated Scailo.TransactionalEmail payload = 4;

#### Defined in

[src/transactional_emails.scailo_pb.ts:346](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/transactional_emails.scailo_pb.ts#L346)

___

### total

• **total**: `bigint` = `protoInt64.zero`

**`Description`**

The total number of records matching the criteria.

**`Example`**

```ts
1250
```

**`Generated`**

from field: uint64 total = 3;

#### Defined in

[src/transactional_emails.scailo_pb.ts:338](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/transactional_emails.scailo_pb.ts#L338)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/transactional_emails.scailo_pb.ts:355](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/transactional_emails.scailo_pb.ts#L355)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/transactional_emails.scailo_pb.ts:353](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/transactional_emails.scailo_pb.ts#L353)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TransactionalEmailPaginationResp"``

#### Defined in

[src/transactional_emails.scailo_pb.ts:354](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/transactional_emails.scailo_pb.ts#L354)

## Methods

### clone

▸ **clone**(): [`TransactionalEmailPaginationResp`](TransactionalEmailPaginationResp.md)

Create a deep copy.

#### Returns

[`TransactionalEmailPaginationResp`](TransactionalEmailPaginationResp.md)

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
| `other` | `undefined` \| ``null`` \| [`TransactionalEmailPaginationResp`](TransactionalEmailPaginationResp.md) \| `PlainMessage`\<[`TransactionalEmailPaginationResp`](TransactionalEmailPaginationResp.md)\> |

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

▸ **getType**(): `MessageType`\<[`TransactionalEmailPaginationResp`](TransactionalEmailPaginationResp.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`TransactionalEmailPaginationResp`](TransactionalEmailPaginationResp.md)\>

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
| `a` | `undefined` \| [`TransactionalEmailPaginationResp`](TransactionalEmailPaginationResp.md) \| `PlainMessage`\<[`TransactionalEmailPaginationResp`](TransactionalEmailPaginationResp.md)\> |
| `b` | `undefined` \| [`TransactionalEmailPaginationResp`](TransactionalEmailPaginationResp.md) \| `PlainMessage`\<[`TransactionalEmailPaginationResp`](TransactionalEmailPaginationResp.md)\> |

#### Returns

`boolean`

#### Defined in

[src/transactional_emails.scailo_pb.ts:374](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/transactional_emails.scailo_pb.ts#L374)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TransactionalEmailPaginationResp`](TransactionalEmailPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`TransactionalEmailPaginationResp`](TransactionalEmailPaginationResp.md)

#### Defined in

[src/transactional_emails.scailo_pb.ts:362](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/transactional_emails.scailo_pb.ts#L362)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TransactionalEmailPaginationResp`](TransactionalEmailPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TransactionalEmailPaginationResp`](TransactionalEmailPaginationResp.md)

#### Defined in

[src/transactional_emails.scailo_pb.ts:366](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/transactional_emails.scailo_pb.ts#L366)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TransactionalEmailPaginationResp`](TransactionalEmailPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TransactionalEmailPaginationResp`](TransactionalEmailPaginationResp.md)

#### Defined in

[src/transactional_emails.scailo_pb.ts:370](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/transactional_emails.scailo_pb.ts#L370)
