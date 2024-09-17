[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / TaxGroupItemHistoryRequest

# Class: TaxGroupItemHistoryRequest

Describes the parameters that are required to retrieve the history of the record

**`Generated`**

from message Scailo.TaxGroupItemHistoryRequest

## Hierarchy

- `Message`\<[`TaxGroupItemHistoryRequest`](TaxGroupItemHistoryRequest.md)\>

  ↳ **`TaxGroupItemHistoryRequest`**

## Table of contents

### Constructors

- [constructor](TaxGroupItemHistoryRequest.md#constructor)

### Properties

- [taxGroupId](TaxGroupItemHistoryRequest.md#taxgroupid)
- [taxParamId](TaxGroupItemHistoryRequest.md#taxparamid)
- [fields](TaxGroupItemHistoryRequest.md#fields)
- [runtime](TaxGroupItemHistoryRequest.md#runtime)
- [typeName](TaxGroupItemHistoryRequest.md#typename)

### Methods

- [clone](TaxGroupItemHistoryRequest.md#clone)
- [equals](TaxGroupItemHistoryRequest.md#equals)
- [fromBinary](TaxGroupItemHistoryRequest.md#frombinary)
- [fromJson](TaxGroupItemHistoryRequest.md#fromjson)
- [fromJsonString](TaxGroupItemHistoryRequest.md#fromjsonstring)
- [getType](TaxGroupItemHistoryRequest.md#gettype)
- [toBinary](TaxGroupItemHistoryRequest.md#tobinary)
- [toJSON](TaxGroupItemHistoryRequest.md#tojson)
- [toJson](TaxGroupItemHistoryRequest.md#tojson-1)
- [toJsonString](TaxGroupItemHistoryRequest.md#tojsonstring)
- [equals](TaxGroupItemHistoryRequest.md#equals-1)
- [fromBinary](TaxGroupItemHistoryRequest.md#frombinary-1)
- [fromJson](TaxGroupItemHistoryRequest.md#fromjson-1)
- [fromJsonString](TaxGroupItemHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new TaxGroupItemHistoryRequest**(`data?`): [`TaxGroupItemHistoryRequest`](TaxGroupItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`TaxGroupItemHistoryRequest`](TaxGroupItemHistoryRequest.md)\> |

#### Returns

[`TaxGroupItemHistoryRequest`](TaxGroupItemHistoryRequest.md)

#### Overrides

Message\&lt;TaxGroupItemHistoryRequest\&gt;.constructor

#### Defined in

src/tax_groups.scailo_pb.ts:1280

## Properties

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

Stores the ID of the tax group

**`Generated`**

from field: uint64 tax_group_id = 10;

#### Defined in

src/tax_groups.scailo_pb.ts:1271

___

### taxParamId

• **taxParamId**: `bigint` = `protoInt64.zero`

The ID of the tax param that is a part of the tax group

**`Generated`**

from field: uint64 tax_param_id = 11;

#### Defined in

src/tax_groups.scailo_pb.ts:1278

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/tax_groups.scailo_pb.ts:1287

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/tax_groups.scailo_pb.ts:1285

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TaxGroupItemHistoryRequest"``

#### Defined in

src/tax_groups.scailo_pb.ts:1286

## Methods

### clone

▸ **clone**(): [`TaxGroupItemHistoryRequest`](TaxGroupItemHistoryRequest.md)

Create a deep copy.

#### Returns

[`TaxGroupItemHistoryRequest`](TaxGroupItemHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`TaxGroupItemHistoryRequest`](TaxGroupItemHistoryRequest.md) \| `PlainMessage`\<[`TaxGroupItemHistoryRequest`](TaxGroupItemHistoryRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`TaxGroupItemHistoryRequest`](TaxGroupItemHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`TaxGroupItemHistoryRequest`](TaxGroupItemHistoryRequest.md)\>

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
| `a` | `undefined` \| [`TaxGroupItemHistoryRequest`](TaxGroupItemHistoryRequest.md) \| `PlainMessage`\<[`TaxGroupItemHistoryRequest`](TaxGroupItemHistoryRequest.md)\> |
| `b` | `undefined` \| [`TaxGroupItemHistoryRequest`](TaxGroupItemHistoryRequest.md) \| `PlainMessage`\<[`TaxGroupItemHistoryRequest`](TaxGroupItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/tax_groups.scailo_pb.ts:1304

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TaxGroupItemHistoryRequest`](TaxGroupItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`TaxGroupItemHistoryRequest`](TaxGroupItemHistoryRequest.md)

#### Defined in

src/tax_groups.scailo_pb.ts:1292

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TaxGroupItemHistoryRequest`](TaxGroupItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TaxGroupItemHistoryRequest`](TaxGroupItemHistoryRequest.md)

#### Defined in

src/tax_groups.scailo_pb.ts:1296

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TaxGroupItemHistoryRequest`](TaxGroupItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TaxGroupItemHistoryRequest`](TaxGroupItemHistoryRequest.md)

#### Defined in

src/tax_groups.scailo_pb.ts:1300
