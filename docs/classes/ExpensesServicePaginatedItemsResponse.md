[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / ExpensesServicePaginatedItemsResponse

# Class: ExpensesServicePaginatedItemsResponse

Describes the response to a pagination items request

**`Generated`**

from message Scailo.ExpensesServicePaginatedItemsResponse

## Hierarchy

- `Message`\<[`ExpensesServicePaginatedItemsResponse`](ExpensesServicePaginatedItemsResponse.md)\>

  ↳ **`ExpensesServicePaginatedItemsResponse`**

## Table of contents

### Constructors

- [constructor](ExpensesServicePaginatedItemsResponse.md#constructor)

### Properties

- [count](ExpensesServicePaginatedItemsResponse.md#count)
- [offset](ExpensesServicePaginatedItemsResponse.md#offset)
- [payload](ExpensesServicePaginatedItemsResponse.md#payload)
- [total](ExpensesServicePaginatedItemsResponse.md#total)
- [fields](ExpensesServicePaginatedItemsResponse.md#fields)
- [runtime](ExpensesServicePaginatedItemsResponse.md#runtime)
- [typeName](ExpensesServicePaginatedItemsResponse.md#typename)

### Methods

- [clone](ExpensesServicePaginatedItemsResponse.md#clone)
- [equals](ExpensesServicePaginatedItemsResponse.md#equals)
- [fromBinary](ExpensesServicePaginatedItemsResponse.md#frombinary)
- [fromJson](ExpensesServicePaginatedItemsResponse.md#fromjson)
- [fromJsonString](ExpensesServicePaginatedItemsResponse.md#fromjsonstring)
- [getType](ExpensesServicePaginatedItemsResponse.md#gettype)
- [toBinary](ExpensesServicePaginatedItemsResponse.md#tobinary)
- [toJSON](ExpensesServicePaginatedItemsResponse.md#tojson)
- [toJson](ExpensesServicePaginatedItemsResponse.md#tojson-1)
- [toJsonString](ExpensesServicePaginatedItemsResponse.md#tojsonstring)
- [equals](ExpensesServicePaginatedItemsResponse.md#equals-1)
- [fromBinary](ExpensesServicePaginatedItemsResponse.md#frombinary-1)
- [fromJson](ExpensesServicePaginatedItemsResponse.md#fromjson-1)
- [fromJsonString](ExpensesServicePaginatedItemsResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new ExpensesServicePaginatedItemsResponse**(`data?`): [`ExpensesServicePaginatedItemsResponse`](ExpensesServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ExpensesServicePaginatedItemsResponse`](ExpensesServicePaginatedItemsResponse.md)\> |

#### Returns

[`ExpensesServicePaginatedItemsResponse`](ExpensesServicePaginatedItemsResponse.md)

#### Overrides

Message\&lt;ExpensesServicePaginatedItemsResponse\&gt;.constructor

#### Defined in

src/expenses.scailo_pb.ts:1323

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

src/expenses.scailo_pb.ts:1300

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

src/expenses.scailo_pb.ts:1307

___

### payload

• **payload**: [`ExpenseItem`](ExpenseItem.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.ExpenseItem payload = 4;

#### Defined in

src/expenses.scailo_pb.ts:1321

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

src/expenses.scailo_pb.ts:1314

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/expenses.scailo_pb.ts:1330

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/expenses.scailo_pb.ts:1328

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ExpensesServicePaginatedItemsResponse"``

#### Defined in

src/expenses.scailo_pb.ts:1329

## Methods

### clone

▸ **clone**(): [`ExpensesServicePaginatedItemsResponse`](ExpensesServicePaginatedItemsResponse.md)

Create a deep copy.

#### Returns

[`ExpensesServicePaginatedItemsResponse`](ExpensesServicePaginatedItemsResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`ExpensesServicePaginatedItemsResponse`](ExpensesServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`ExpensesServicePaginatedItemsResponse`](ExpensesServicePaginatedItemsResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`ExpensesServicePaginatedItemsResponse`](ExpensesServicePaginatedItemsResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ExpensesServicePaginatedItemsResponse`](ExpensesServicePaginatedItemsResponse.md)\>

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
| `a` | `undefined` \| [`ExpensesServicePaginatedItemsResponse`](ExpensesServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`ExpensesServicePaginatedItemsResponse`](ExpensesServicePaginatedItemsResponse.md)\> |
| `b` | `undefined` \| [`ExpensesServicePaginatedItemsResponse`](ExpensesServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`ExpensesServicePaginatedItemsResponse`](ExpensesServicePaginatedItemsResponse.md)\> |

#### Returns

`boolean`

#### Defined in

src/expenses.scailo_pb.ts:1349

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ExpensesServicePaginatedItemsResponse`](ExpensesServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ExpensesServicePaginatedItemsResponse`](ExpensesServicePaginatedItemsResponse.md)

#### Defined in

src/expenses.scailo_pb.ts:1337

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ExpensesServicePaginatedItemsResponse`](ExpensesServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ExpensesServicePaginatedItemsResponse`](ExpensesServicePaginatedItemsResponse.md)

#### Defined in

src/expenses.scailo_pb.ts:1341

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ExpensesServicePaginatedItemsResponse`](ExpensesServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ExpensesServicePaginatedItemsResponse`](ExpensesServicePaginatedItemsResponse.md)

#### Defined in

src/expenses.scailo_pb.ts:1345
