[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuestionnaireOptionGroupsServicePaginationResponse

# Class: QuestionnaireOptionGroupsServicePaginationResponse

Response message for paginated queries, including total counts for UI elements.

**`Generated`**

from message Scailo.QuestionnaireOptionGroupsServicePaginationResponse

## Hierarchy

- `Message`\<[`QuestionnaireOptionGroupsServicePaginationResponse`](QuestionnaireOptionGroupsServicePaginationResponse.md)\>

  ↳ **`QuestionnaireOptionGroupsServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](QuestionnaireOptionGroupsServicePaginationResponse.md#constructor)

### Properties

- [count](QuestionnaireOptionGroupsServicePaginationResponse.md#count)
- [offset](QuestionnaireOptionGroupsServicePaginationResponse.md#offset)
- [payload](QuestionnaireOptionGroupsServicePaginationResponse.md#payload)
- [total](QuestionnaireOptionGroupsServicePaginationResponse.md#total)
- [fields](QuestionnaireOptionGroupsServicePaginationResponse.md#fields)
- [runtime](QuestionnaireOptionGroupsServicePaginationResponse.md#runtime)
- [typeName](QuestionnaireOptionGroupsServicePaginationResponse.md#typename)

### Methods

- [clone](QuestionnaireOptionGroupsServicePaginationResponse.md#clone)
- [equals](QuestionnaireOptionGroupsServicePaginationResponse.md#equals)
- [fromBinary](QuestionnaireOptionGroupsServicePaginationResponse.md#frombinary)
- [fromJson](QuestionnaireOptionGroupsServicePaginationResponse.md#fromjson)
- [fromJsonString](QuestionnaireOptionGroupsServicePaginationResponse.md#fromjsonstring)
- [getType](QuestionnaireOptionGroupsServicePaginationResponse.md#gettype)
- [toBinary](QuestionnaireOptionGroupsServicePaginationResponse.md#tobinary)
- [toJSON](QuestionnaireOptionGroupsServicePaginationResponse.md#tojson)
- [toJson](QuestionnaireOptionGroupsServicePaginationResponse.md#tojson-1)
- [toJsonString](QuestionnaireOptionGroupsServicePaginationResponse.md#tojsonstring)
- [equals](QuestionnaireOptionGroupsServicePaginationResponse.md#equals-1)
- [fromBinary](QuestionnaireOptionGroupsServicePaginationResponse.md#frombinary-1)
- [fromJson](QuestionnaireOptionGroupsServicePaginationResponse.md#fromjson-1)
- [fromJsonString](QuestionnaireOptionGroupsServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuestionnaireOptionGroupsServicePaginationResponse**(`data?`): [`QuestionnaireOptionGroupsServicePaginationResponse`](QuestionnaireOptionGroupsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuestionnaireOptionGroupsServicePaginationResponse`](QuestionnaireOptionGroupsServicePaginationResponse.md)\> |

#### Returns

[`QuestionnaireOptionGroupsServicePaginationResponse`](QuestionnaireOptionGroupsServicePaginationResponse.md)

#### Overrides

Message\&lt;QuestionnaireOptionGroupsServicePaginationResponse\&gt;.constructor

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1642](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L1642)

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

[src/questionnaire_option_groups.scailo_pb.ts:1612](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L1612)

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

[src/questionnaire_option_groups.scailo_pb.ts:1622](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L1622)

___

### payload

• **payload**: [`QuestionnaireOptionGroup`](QuestionnaireOptionGroup.md)[] = `[]`

**`Description`**

The array of records for the current page.

**`Generated`**

from field: repeated Scailo.QuestionnaireOptionGroup payload = 4;

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1640](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L1640)

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

[src/questionnaire_option_groups.scailo_pb.ts:1632](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L1632)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1649](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L1649)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1647](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L1647)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuestionnaireOptionGroupsServicePaginationResponse"``

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1648](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L1648)

## Methods

### clone

▸ **clone**(): [`QuestionnaireOptionGroupsServicePaginationResponse`](QuestionnaireOptionGroupsServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`QuestionnaireOptionGroupsServicePaginationResponse`](QuestionnaireOptionGroupsServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`QuestionnaireOptionGroupsServicePaginationResponse`](QuestionnaireOptionGroupsServicePaginationResponse.md) \| `PlainMessage`\<[`QuestionnaireOptionGroupsServicePaginationResponse`](QuestionnaireOptionGroupsServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuestionnaireOptionGroupsServicePaginationResponse`](QuestionnaireOptionGroupsServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuestionnaireOptionGroupsServicePaginationResponse`](QuestionnaireOptionGroupsServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`QuestionnaireOptionGroupsServicePaginationResponse`](QuestionnaireOptionGroupsServicePaginationResponse.md) \| `PlainMessage`\<[`QuestionnaireOptionGroupsServicePaginationResponse`](QuestionnaireOptionGroupsServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`QuestionnaireOptionGroupsServicePaginationResponse`](QuestionnaireOptionGroupsServicePaginationResponse.md) \| `PlainMessage`\<[`QuestionnaireOptionGroupsServicePaginationResponse`](QuestionnaireOptionGroupsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1668](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L1668)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuestionnaireOptionGroupsServicePaginationResponse`](QuestionnaireOptionGroupsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuestionnaireOptionGroupsServicePaginationResponse`](QuestionnaireOptionGroupsServicePaginationResponse.md)

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1656](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L1656)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuestionnaireOptionGroupsServicePaginationResponse`](QuestionnaireOptionGroupsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireOptionGroupsServicePaginationResponse`](QuestionnaireOptionGroupsServicePaginationResponse.md)

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1660](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L1660)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuestionnaireOptionGroupsServicePaginationResponse`](QuestionnaireOptionGroupsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireOptionGroupsServicePaginationResponse`](QuestionnaireOptionGroupsServicePaginationResponse.md)

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1664](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L1664)
