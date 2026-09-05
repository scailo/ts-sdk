[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuestionnaireOptionGroupsServicePaginatedValuesResponse

# Class: QuestionnaireOptionGroupsServicePaginatedValuesResponse

Paginated response packet containing a subset of Questionnaire Option Group Value records.
Includes complete operational state parameters for rendering frontend data grids and tables.

**`Generated`**

from message Scailo.QuestionnaireOptionGroupsServicePaginatedValuesResponse

## Hierarchy

- `Message`\<[`QuestionnaireOptionGroupsServicePaginatedValuesResponse`](QuestionnaireOptionGroupsServicePaginatedValuesResponse.md)\>

  ↳ **`QuestionnaireOptionGroupsServicePaginatedValuesResponse`**

## Table of contents

### Constructors

- [constructor](QuestionnaireOptionGroupsServicePaginatedValuesResponse.md#constructor)

### Properties

- [count](QuestionnaireOptionGroupsServicePaginatedValuesResponse.md#count)
- [offset](QuestionnaireOptionGroupsServicePaginatedValuesResponse.md#offset)
- [payload](QuestionnaireOptionGroupsServicePaginatedValuesResponse.md#payload)
- [total](QuestionnaireOptionGroupsServicePaginatedValuesResponse.md#total)
- [fields](QuestionnaireOptionGroupsServicePaginatedValuesResponse.md#fields)
- [runtime](QuestionnaireOptionGroupsServicePaginatedValuesResponse.md#runtime)
- [typeName](QuestionnaireOptionGroupsServicePaginatedValuesResponse.md#typename)

### Methods

- [clone](QuestionnaireOptionGroupsServicePaginatedValuesResponse.md#clone)
- [equals](QuestionnaireOptionGroupsServicePaginatedValuesResponse.md#equals)
- [fromBinary](QuestionnaireOptionGroupsServicePaginatedValuesResponse.md#frombinary)
- [fromJson](QuestionnaireOptionGroupsServicePaginatedValuesResponse.md#fromjson)
- [fromJsonString](QuestionnaireOptionGroupsServicePaginatedValuesResponse.md#fromjsonstring)
- [getType](QuestionnaireOptionGroupsServicePaginatedValuesResponse.md#gettype)
- [toBinary](QuestionnaireOptionGroupsServicePaginatedValuesResponse.md#tobinary)
- [toJSON](QuestionnaireOptionGroupsServicePaginatedValuesResponse.md#tojson)
- [toJson](QuestionnaireOptionGroupsServicePaginatedValuesResponse.md#tojson-1)
- [toJsonString](QuestionnaireOptionGroupsServicePaginatedValuesResponse.md#tojsonstring)
- [equals](QuestionnaireOptionGroupsServicePaginatedValuesResponse.md#equals-1)
- [fromBinary](QuestionnaireOptionGroupsServicePaginatedValuesResponse.md#frombinary-1)
- [fromJson](QuestionnaireOptionGroupsServicePaginatedValuesResponse.md#fromjson-1)
- [fromJsonString](QuestionnaireOptionGroupsServicePaginatedValuesResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuestionnaireOptionGroupsServicePaginatedValuesResponse**(`data?`): [`QuestionnaireOptionGroupsServicePaginatedValuesResponse`](QuestionnaireOptionGroupsServicePaginatedValuesResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuestionnaireOptionGroupsServicePaginatedValuesResponse`](QuestionnaireOptionGroupsServicePaginatedValuesResponse.md)\> |

#### Returns

[`QuestionnaireOptionGroupsServicePaginatedValuesResponse`](QuestionnaireOptionGroupsServicePaginatedValuesResponse.md)

#### Overrides

Message\&lt;QuestionnaireOptionGroupsServicePaginatedValuesResponse\&gt;.constructor

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1448](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_option_groups.scailo_pb.ts#L1448)

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

[src/questionnaire_option_groups.scailo_pb.ts:1418](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_option_groups.scailo_pb.ts#L1418)

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

[src/questionnaire_option_groups.scailo_pb.ts:1428](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_option_groups.scailo_pb.ts#L1428)

___

### payload

• **payload**: [`QuestionnaireOptionGroupValue`](QuestionnaireOptionGroupValue.md)[] = `[]`

**`Description`**

The array of records for the current page.

**`Generated`**

from field: repeated Scailo.QuestionnaireOptionGroupValue payload = 4;

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1446](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_option_groups.scailo_pb.ts#L1446)

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

[src/questionnaire_option_groups.scailo_pb.ts:1438](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_option_groups.scailo_pb.ts#L1438)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1455](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_option_groups.scailo_pb.ts#L1455)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1453](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_option_groups.scailo_pb.ts#L1453)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuestionnaireOptionGroupsServicePaginatedValuesResponse"``

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1454](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_option_groups.scailo_pb.ts#L1454)

## Methods

### clone

▸ **clone**(): [`QuestionnaireOptionGroupsServicePaginatedValuesResponse`](QuestionnaireOptionGroupsServicePaginatedValuesResponse.md)

Create a deep copy.

#### Returns

[`QuestionnaireOptionGroupsServicePaginatedValuesResponse`](QuestionnaireOptionGroupsServicePaginatedValuesResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`QuestionnaireOptionGroupsServicePaginatedValuesResponse`](QuestionnaireOptionGroupsServicePaginatedValuesResponse.md) \| `PlainMessage`\<[`QuestionnaireOptionGroupsServicePaginatedValuesResponse`](QuestionnaireOptionGroupsServicePaginatedValuesResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuestionnaireOptionGroupsServicePaginatedValuesResponse`](QuestionnaireOptionGroupsServicePaginatedValuesResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuestionnaireOptionGroupsServicePaginatedValuesResponse`](QuestionnaireOptionGroupsServicePaginatedValuesResponse.md)\>

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
| `a` | `undefined` \| [`QuestionnaireOptionGroupsServicePaginatedValuesResponse`](QuestionnaireOptionGroupsServicePaginatedValuesResponse.md) \| `PlainMessage`\<[`QuestionnaireOptionGroupsServicePaginatedValuesResponse`](QuestionnaireOptionGroupsServicePaginatedValuesResponse.md)\> |
| `b` | `undefined` \| [`QuestionnaireOptionGroupsServicePaginatedValuesResponse`](QuestionnaireOptionGroupsServicePaginatedValuesResponse.md) \| `PlainMessage`\<[`QuestionnaireOptionGroupsServicePaginatedValuesResponse`](QuestionnaireOptionGroupsServicePaginatedValuesResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1474](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_option_groups.scailo_pb.ts#L1474)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuestionnaireOptionGroupsServicePaginatedValuesResponse`](QuestionnaireOptionGroupsServicePaginatedValuesResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuestionnaireOptionGroupsServicePaginatedValuesResponse`](QuestionnaireOptionGroupsServicePaginatedValuesResponse.md)

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1462](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_option_groups.scailo_pb.ts#L1462)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuestionnaireOptionGroupsServicePaginatedValuesResponse`](QuestionnaireOptionGroupsServicePaginatedValuesResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireOptionGroupsServicePaginatedValuesResponse`](QuestionnaireOptionGroupsServicePaginatedValuesResponse.md)

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1466](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_option_groups.scailo_pb.ts#L1466)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuestionnaireOptionGroupsServicePaginatedValuesResponse`](QuestionnaireOptionGroupsServicePaginatedValuesResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireOptionGroupsServicePaginatedValuesResponse`](QuestionnaireOptionGroupsServicePaginatedValuesResponse.md)

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1470](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_option_groups.scailo_pb.ts#L1470)
