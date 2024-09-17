[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalariesServiceDeductionItemUpdateRequest

# Class: SalariesServiceDeductionItemUpdateRequest

Describes the parameters required to update an deduction item in a salary

**`Generated`**

from message Scailo.SalariesServiceDeductionItemUpdateRequest

## Hierarchy

- `Message`\<[`SalariesServiceDeductionItemUpdateRequest`](SalariesServiceDeductionItemUpdateRequest.md)\>

  ↳ **`SalariesServiceDeductionItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](SalariesServiceDeductionItemUpdateRequest.md#constructor)

### Properties

- [id](SalariesServiceDeductionItemUpdateRequest.md#id)
- [quantity](SalariesServiceDeductionItemUpdateRequest.md#quantity)
- [userComment](SalariesServiceDeductionItemUpdateRequest.md#usercomment)
- [fields](SalariesServiceDeductionItemUpdateRequest.md#fields)
- [runtime](SalariesServiceDeductionItemUpdateRequest.md#runtime)
- [typeName](SalariesServiceDeductionItemUpdateRequest.md#typename)

### Methods

- [clone](SalariesServiceDeductionItemUpdateRequest.md#clone)
- [equals](SalariesServiceDeductionItemUpdateRequest.md#equals)
- [fromBinary](SalariesServiceDeductionItemUpdateRequest.md#frombinary)
- [fromJson](SalariesServiceDeductionItemUpdateRequest.md#fromjson)
- [fromJsonString](SalariesServiceDeductionItemUpdateRequest.md#fromjsonstring)
- [getType](SalariesServiceDeductionItemUpdateRequest.md#gettype)
- [toBinary](SalariesServiceDeductionItemUpdateRequest.md#tobinary)
- [toJSON](SalariesServiceDeductionItemUpdateRequest.md#tojson)
- [toJson](SalariesServiceDeductionItemUpdateRequest.md#tojson-1)
- [toJsonString](SalariesServiceDeductionItemUpdateRequest.md#tojsonstring)
- [equals](SalariesServiceDeductionItemUpdateRequest.md#equals-1)
- [fromBinary](SalariesServiceDeductionItemUpdateRequest.md#frombinary-1)
- [fromJson](SalariesServiceDeductionItemUpdateRequest.md#fromjson-1)
- [fromJsonString](SalariesServiceDeductionItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalariesServiceDeductionItemUpdateRequest**(`data?`): [`SalariesServiceDeductionItemUpdateRequest`](SalariesServiceDeductionItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalariesServiceDeductionItemUpdateRequest`](SalariesServiceDeductionItemUpdateRequest.md)\> |

#### Returns

[`SalariesServiceDeductionItemUpdateRequest`](SalariesServiceDeductionItemUpdateRequest.md)

#### Overrides

Message\&lt;SalariesServiceDeductionItemUpdateRequest\&gt;.constructor

#### Defined in

src/salaries.scailo_pb.ts:1370

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/salaries.scailo_pb.ts:1361

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

The total quantity of this item (in cents)

**`Generated`**

from field: int64 quantity = 13;

#### Defined in

src/salaries.scailo_pb.ts:1368

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/salaries.scailo_pb.ts:1354

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/salaries.scailo_pb.ts:1377

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/salaries.scailo_pb.ts:1375

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalariesServiceDeductionItemUpdateRequest"``

#### Defined in

src/salaries.scailo_pb.ts:1376

## Methods

### clone

▸ **clone**(): [`SalariesServiceDeductionItemUpdateRequest`](SalariesServiceDeductionItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`SalariesServiceDeductionItemUpdateRequest`](SalariesServiceDeductionItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalariesServiceDeductionItemUpdateRequest`](SalariesServiceDeductionItemUpdateRequest.md) \| `PlainMessage`\<[`SalariesServiceDeductionItemUpdateRequest`](SalariesServiceDeductionItemUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalariesServiceDeductionItemUpdateRequest`](SalariesServiceDeductionItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalariesServiceDeductionItemUpdateRequest`](SalariesServiceDeductionItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`SalariesServiceDeductionItemUpdateRequest`](SalariesServiceDeductionItemUpdateRequest.md) \| `PlainMessage`\<[`SalariesServiceDeductionItemUpdateRequest`](SalariesServiceDeductionItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`SalariesServiceDeductionItemUpdateRequest`](SalariesServiceDeductionItemUpdateRequest.md) \| `PlainMessage`\<[`SalariesServiceDeductionItemUpdateRequest`](SalariesServiceDeductionItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/salaries.scailo_pb.ts:1395

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalariesServiceDeductionItemUpdateRequest`](SalariesServiceDeductionItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalariesServiceDeductionItemUpdateRequest`](SalariesServiceDeductionItemUpdateRequest.md)

#### Defined in

src/salaries.scailo_pb.ts:1383

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalariesServiceDeductionItemUpdateRequest`](SalariesServiceDeductionItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalariesServiceDeductionItemUpdateRequest`](SalariesServiceDeductionItemUpdateRequest.md)

#### Defined in

src/salaries.scailo_pb.ts:1387

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalariesServiceDeductionItemUpdateRequest`](SalariesServiceDeductionItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalariesServiceDeductionItemUpdateRequest`](SalariesServiceDeductionItemUpdateRequest.md)

#### Defined in

src/salaries.scailo_pb.ts:1391
