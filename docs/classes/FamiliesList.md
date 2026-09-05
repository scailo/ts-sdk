[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FamiliesList

# Class: FamiliesList

Container message for a collection of Family records.

**`Generated`**

from message Scailo.FamiliesList

## Hierarchy

- `Message`\<[`FamiliesList`](FamiliesList.md)\>

  ↳ **`FamiliesList`**

## Table of contents

### Constructors

- [constructor](FamiliesList.md#constructor)

### Properties

- [list](FamiliesList.md#list)
- [fields](FamiliesList.md#fields)
- [runtime](FamiliesList.md#runtime)
- [typeName](FamiliesList.md#typename)

### Methods

- [clone](FamiliesList.md#clone)
- [equals](FamiliesList.md#equals)
- [fromBinary](FamiliesList.md#frombinary)
- [fromJson](FamiliesList.md#fromjson)
- [fromJsonString](FamiliesList.md#fromjsonstring)
- [getType](FamiliesList.md#gettype)
- [toBinary](FamiliesList.md#tobinary)
- [toJSON](FamiliesList.md#tojson)
- [toJson](FamiliesList.md#tojson-1)
- [toJsonString](FamiliesList.md#tojsonstring)
- [equals](FamiliesList.md#equals-1)
- [fromBinary](FamiliesList.md#frombinary-1)
- [fromJson](FamiliesList.md#fromjson-1)
- [fromJsonString](FamiliesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new FamiliesList**(`data?`): [`FamiliesList`](FamiliesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FamiliesList`](FamiliesList.md)\> |

#### Returns

[`FamiliesList`](FamiliesList.md)

#### Overrides

Message\&lt;FamiliesList\&gt;.constructor

#### Defined in

[src/families.scailo_pb.ts:1407](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L1407)

## Properties

### list

• **list**: [`Family`](Family.md)[] = `[]`

**`Description`**

An array of Family records.

**`Generated`**

from field: repeated Scailo.Family list = 1;

#### Defined in

[src/families.scailo_pb.ts:1405](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L1405)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/families.scailo_pb.ts:1414](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L1414)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/families.scailo_pb.ts:1412](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L1412)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FamiliesList"``

#### Defined in

[src/families.scailo_pb.ts:1413](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L1413)

## Methods

### clone

▸ **clone**(): [`FamiliesList`](FamiliesList.md)

Create a deep copy.

#### Returns

[`FamiliesList`](FamiliesList.md)

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
| `other` | `undefined` \| ``null`` \| [`FamiliesList`](FamiliesList.md) \| `PlainMessage`\<[`FamiliesList`](FamiliesList.md)\> |

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

▸ **getType**(): `MessageType`\<[`FamiliesList`](FamiliesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FamiliesList`](FamiliesList.md)\>

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
| `a` | `undefined` \| [`FamiliesList`](FamiliesList.md) \| `PlainMessage`\<[`FamiliesList`](FamiliesList.md)\> |
| `b` | `undefined` \| [`FamiliesList`](FamiliesList.md) \| `PlainMessage`\<[`FamiliesList`](FamiliesList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/families.scailo_pb.ts:1430](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L1430)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FamiliesList`](FamiliesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FamiliesList`](FamiliesList.md)

#### Defined in

[src/families.scailo_pb.ts:1418](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L1418)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FamiliesList`](FamiliesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamiliesList`](FamiliesList.md)

#### Defined in

[src/families.scailo_pb.ts:1422](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L1422)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FamiliesList`](FamiliesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamiliesList`](FamiliesList.md)

#### Defined in

[src/families.scailo_pb.ts:1426](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L1426)
